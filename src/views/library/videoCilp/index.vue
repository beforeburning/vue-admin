<template>
    <div class="videoClip" ref="videoClip">
        <div class="tab">
            <el-button v-show="!videoData" class="addImages" @click="addVideo" type="primary">选择视频</el-button>
            <el-tabs v-show="videoData" tab-position="left">
                <el-tab-pane class="addTextData" label="插入文字">
                    <div class="add">
                        <p class="title">新增插入</p>
                        <div class="inputDom">
                            <div class="line1">
                                <label>
                                    <p>文本:</p>
                                    <el-input placeholder='文本' @keyup.enter.native="addText"
                                              v-model="addTextData.text"></el-input>
                                </label>
                            </div>
                        </div>
                        <div class="btn">
                            <el-button class="add" @click="addText" type="primary">添加</el-button>
                            <el-button class="reset" @click="resetText" type="warning">重置</el-button>
                        </div>
                    </div>
                    <div class="historyData">
                        <p class="title">插入列表</p>
                        <div class="history">
                            <div class="list" v-for="item in dataListArr" :key="item.id" v-if="item.type === 'text'">
                                <el-form class="inputDom" :disabled='item.id !== editorId'>
                                    <div class="line1">
                                         <label>
                                            <p>文本:</p>
                                            <el-input placeholder='文本' v-model="item.text"></el-input>
                                        </label>
                                    </div>
                                    <div class="line2">
                                        <label>
                                            <p>文字:</p>
                                            <el-select v-model="item.font" placeholder="请选择">
                                                <el-option v-for="item in font" :value="item.fontname"
                                                           :label="item.name"></el-option>
                                            </el-select>
                                        </label>
                                        <!--                                        <label>-->
                                        <!--                                            <p>样式:</p>-->
                                        <!--                                            <el-select v-model="item.style" placeholder="请选择">-->
                                        <!--                                                <el-option value="normal" label="不加粗"></el-option>-->
                                        <!--                                                <el-option value="bold" label="加粗"></el-option>-->
                                        <!--                                            </el-select>-->
                                        <!--                                        </label>-->
                                    </div>
                                    <div class="line2">
                                        <label>
                                            <p>大小:</p>
                                            <el-input placeholder='大小' v-model="item.size"></el-input>
                                        </label>
                                         <label>
                                            <p>颜色:</p>
                                             <el-color-picker
                                                 v-model="item.color"
                                                 show-alpha
                                                 color-format="rgb"
                                                 :predefine="predefineColors">
                                             </el-color-picker>
                                        </label>
                                    </div>
                                    <div class="line2">
                                        <label>
                                            <p>开始:</p>
                                            <el-input placeholder='开始' v-model="item.currentTime"></el-input>
                                        </label>
                                         <label>
                                            <p>持续:</p>
                                             <el-input placeholder='持续' v-model="item.continuous"></el-input>
                                        </label>
                                    </div>
                                    <div class="line2">
                                        <label>
                                            <p>X轴:</p>
                                            <el-input placeholder='X轴' v-model="item.x"></el-input>
                                        </label>
                                         <label>
                                            <p>Y轴:</p>
                                             <el-input placeholder='Y轴' v-model="item.y"></el-input>
                                        </label>
                                    </div>
                                    <div class="line2">
                                        <label>
                                            <p>层级:</p>
                                            <el-input placeholder='层级' v-model="item.zIndex"></el-input>
                                        </label>
                                        <label>
                                            <p>动画:</p>
                                            <el-select v-model="item.animation" placeholder="请选择">
                                                <el-option v-for="item in effect" :value="item.id"
                                                           :label="item.name"></el-option>
                                            </el-select>
                                        </label>
                                    </div>
                                    <div class="line2">
                                        <label>
                                            <p>背景:</p>
                                            <el-color-picker
                                                v-model="item.background"
                                                show-alpha
                                                color-format="rgb"
                                                :predefine="predefineColors">
                                             </el-color-picker>
                                        </label>
                                        <label>
                                            <p>边距:</p>
                                            <el-input placeholder='边距' v-model="item.padding"></el-input>
                                        </label>
                                    </div>
                                </el-form>
                                <div class="btn">
                                    <el-button v-if="item.id === editorId" class="reset" @click="save"
                                               type="success">保存</el-button>
                                    <el-button v-else class="add" @click="editor(item)" type="primary">编辑</el-button>
                                    <el-button class="add" @click="del(item)" type="danger">删除</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane class="addImagesData" label="插入图片">
                    <div class="add">
                        <p class="title">新增插入</p>
                        <div class="btn">
                            <el-button class="add" @click="addImages" type="primary">添加</el-button>
                        </div>
                    </div>
                    <div class="historyData">
                        <p class="title">插入列表</p>
                        <div class="history">
                            <div class="list" v-for="item in dataListArr" :key="item.id" v-if="item.type === 'img'">
                                <el-form class="inputDom" :disabled='item.id !== editorId'>
                                    <div class="top">
                                        <strong>
                                        <img :src="item.path" alt="">
                                    </strong>
                                        <span>
                                            <label>
                                                <p>宽度:</p>
                                                <el-input placeholder='宽度' v-model="item.width"></el-input>
                                            </label>
                                            <label>
                                                <p>高度:</p>
                                                <el-input placeholder='高度' v-model="item.height"></el-input>
                                            </label>

                                            <label>
                                                <p>X轴:</p>
                                                <el-input placeholder='X轴' v-model="item.x"></el-input>
                                            </label>
                                            <label>
                                                <p>Y轴:</p>
                                                <el-input placeholder='Y轴' v-model="item.y"></el-input>
                                            </label>
                                        </span>
                                    </div>
                                    <div class="bottom">

                                        <div class="line2">
                                            <label>
                                                <p>开始:</p>
                                                <el-input placeholder='开始' v-model="item.currentTime"></el-input>
                                            </label>
                                            <label>
                                                <p>持续:</p>
                                                <el-input placeholder='持续' v-model="item.continuous"></el-input>
                                            </label>
                                        </div>

                                        <div class="line2">
                                             <label>
                                                <p>层级:</p>
                                                <el-input placeholder='层级' v-model="item.zIndex"></el-input>
                                            </label>
                                             <label>
                                                <p>动画:</p>
                                                <el-select v-model="item.animation" placeholder="请选择">
                                                     <el-option v-for="item in effect" :value="item.id"
                                                                :label="item.name"></el-option>
                                                </el-select>
                                            </label>
                                        </div>

                                         <div class="line2">
                                            <label>
                                                <p>动图:</p>
                                                <el-checkbox v-model="item.isGif">是否动图</el-checkbox>
                                            </label>
                                        </div>
                                    </div>
                                </el-form>
                                <div class="btn">
                                    <el-button v-if="item.id === editorId" class="reset" @click="save"
                                               type="success">保存</el-button>
                                    <el-button v-else class="add" @click="editor(item)" type="primary">编辑</el-button>
                                    <el-button class="add" @click="del(item)" type="danger">删除</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane class="addAudioData" label="插入音频">
                    <div class="add">
                        <p class="title">新增插入</p>
                        <div class="btn">
                            <el-button class="add" @click="addAudio" type="primary">添加</el-button>
                        </div>
                    </div>
                    <div class="historyData">
                        <p class="title">插入列表</p>
                        <div class="history">
                            <div class="list" v-for="item in dataListArr" :key="item.id" v-if="item.type === 'audio'">
                                <el-form class="inputDom" :disabled='item.id !== editorId'>
                                    <div>
                                        <audio :id="'audio' + item.id" :src="item.path" :loop="item.isLoop"></audio>
                                        <p>名称: {{ item.fileName }}</p>
                                        <p>时长: {{ item.duration }}</p>
                                        <label>
                                            <p>开始:</p>
                                            <el-input placeholder='文本' v-model="item.currentTime"></el-input>
                                        </label>
                                    </div>
                                    <div class="line2">
                                        <label>
                                            <p>循环:</p>
                                            <el-checkbox v-model="item.isLoop">是否循环</el-checkbox>
                                        </label>
                                    </div>
                                </el-form>
                                <div class="btn">
                                    <el-button v-if="item.id === editorId" class="reset" @click="save"
                                               type="success">保存</el-button>
                                    <el-button v-else class="add" @click="editor(item)" type="primary">编辑</el-button>
                                    <el-button class="add" @click="del(item)" type="danger">删除</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
             </el-tabs>
        </div>

        <div class="canvas">
            <div class="videoBox">
                <div class="video" v-show="videoData">
                    <video ref="video"
                           :muted="isMuted"
                           :style="{width: videoData.vw + 'px',height: videoData.vh ? videoData.vh : 540 + 'px'}"
                           :src="videoData.filePath" preload></video>
                    <div class="controls">
                        <p @click='videoBtn' ref="videoBtn" :class="state ? 'play' : 'pause'"></p>
                        <label class="rangeBox">
                            <input @change="rangeChange" ref="range" type="range" max="100" min="0" value="0"
                                   name="volume">
                        </label>
                        <p>{{ currentTime.toFixed(2) }}</p>
                        <label class="timeBox">
                            <el-input type="text" v-model="videoTimeInput"
                                      @keyup.enter.native="videoTimeJump"></el-input>
                        </label>
                    </div>
                    <div class="videoInformation">
                        <span class="information">
                            <p>视频信息</p>
                            <p>id:{{ videoData.id }} 文件名称:{{ videoData.fileName }} 视频时长:{{ videoData.duration }}</p>
                            <p>视频宽度:{{ videoData.width }} 视频高度:{{ videoData.height }} 页面比例:{{
                                    videoData.proportion
                                }}</p>
                            <p>本地地址:{{ videoData.filePath }}</p>
                        </span>
                        <span class="btn">
                            <el-button @click="muted" type="warning">{{ isMuted ? '视频静音' : '视频不静音' }}</el-button>
                            <el-button @click="preview" type="primary">提交预览</el-button>
                        </span>
                    </div>
                </div>
                <div class="canvasList" ref="canvasList" :style="{height: videoData.vh + 'px'}">
                    <div v-show="item.show" :style="{zIndex : item.id === editorId ? 999 : item.zIndex}"
                         v-for="item in dataListArr" :id="item.id"
                         @mousedown="mousedownHandleelse()"
                         @mouseup="mouseupHandleelse()"
                         @mousemove="mouseDownHandleelse($event, item)"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 配置文件
const CONFIG = {
    interfaceUrl: {
        getConfig: 'http://192.168.1.81:12021/config',
    },
}

// ajax
const axios = {
    // form data
    formDataAjax(data) {
        return new Promise((resolve, reject) => {
            // 创建formdata
            let formData = new FormData();

            // formData.append(data.name, data.base64);
            formData.append('imageBase64', data.base64);

            // 进度
            const progressFunction = e => {
                let loading = Math.round(e.loaded / e.total * 100);
                // console.log(loading);
            }

            // 上传成功
            const uploadComplete = e => {
                resolve(JSON.parse(e.currentTarget.responseText));
            }

            // 上传失败
            const uploadFailed = e => {
                reject(false);
            }

            let xhr = new XMLHttpRequest();
            xhr.onload = uploadComplete; // 上传成功后的回调函数
            xhr.onerror = uploadFailed; // 上传失败后的回调函数
            xhr.upload.onprogress = progressFunction; // 监听函数
            xhr.open("POST", CONFIG.interfaceUrl.imgUpDataSrc, true);
            xhr.send(formData);
        })
    },
    // ajax post get
    ajax(options) {
        const _formsParams = data => {
            let arr = [];
            for (let prop in data) {
                arr.push(prop + "=" + data[prop]);
            }
            return arr.join("&");
        }

        let xhr = null;
        let params = _formsParams(options.data);
        //创建对象
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // 连接
        if (options.type === "GET") {
            xhr.open(options.type, options.url + "?" + params, options.async);
            xhr.send(null)
        } else if (options.type === "POST") {
            xhr.open(options.type, options.url, options.async);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                options.success(JSON.parse(xhr.responseText));
            }
        }

    },
}

export default {
    name: "videoCilp",
    data() {
        return {
            // 是否正在播放
            isPlay: false,
            // 视频是否静音
            isMuted: false,
            // 浏览器高度
            windowHeight: window.outerHeight,
            // 播放状态
            state: false,
            // 当前播放时间
            currentTime: 0,
            // 跳转输入框的值
            videoTimeInput: '',
            // 列表数据
            dataListArr: [],
            // 视频数据
            videoData: '',
            // 是否可以上传音频
            isAudio: '',
            // 常用颜色
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
            ],
            // 当前编辑项
            editorId: '',
            // 插入文本
            addTextData: {
                text: '',
                size: 40,
                color: '#000000',
                style: 'normal',
                currentTime: 0,
                continuous: 1,
                x: 0,
                y: 0,
                font: '',
                animation: 0,
                background: null,
                zIndex: 1,
                padding: 0
            },
            // 插入图片
            addImagesData: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                currentTime: 0,
                continuous: 1,
                zIndex: 1,
                animation: 0,
                isGif: false
            },
            // 插入音频
            addAudioData: {
                currentTime: 0,
                isLoop: false
            },
            // 是否可拖拽
            isDrag: false,
            // 字体文件
            font: [],
            defaultFont: '',
            // 字体地址
            fontUrl: '',
            // 动画列表
            effect: []
        }
    },
    watch: {
        //  监听视频时间
        currentTime: {
            handler(val) {
                this.$refs.range.value = (val / parseFloat(this.$refs.video.duration)).toFixed(2) * 100
                this.canvasTime()
            }
        },
        dataListArr: {
            handler() {
                setTimeout(() => {
                    this.canvasDraw()
                    this.canvasTime()
                }, 0)
            },
            deep: true
        }
    },
    mounted() {
        // 获取字体文件
        this.getConfig()

        // 监听视频进度
        this.$refs.video.addEventListener('timeupdate', () => this.currentTime = this.$refs.video.currentTime)
        // 监听视频播放暂停
        this.$refs.video.addEventListener('pause', () => {
            this.isPlay = false
            let audioList = document.getElementsByTagName('audio')
            for (let item of audioList) {
                item.pause()
            }
        })
        this.$refs.video.addEventListener('play', () => {
            this.isPlay = true
            this.audioPosition();
        })
    },
    methods: {
        // 获取字体文件
        getConfig() {
            axios.ajax({
                url: CONFIG.interfaceUrl.getConfig,
                type: "GET",
                async: true,
                success: data => {
                    if (data.code === 200) {
                        this.effect = data.data.effect

                        this.fontUrl = data.data.fontUrl
                        this.font = data.data.font
                        this.defaultFont = data.data.font[0].fontname
                        this.addTextData.font = data.data.font[0].fontname
                        let css = ``
                        data.data.font.map(item => {
                            let fontSrc = `${this.fontUrl}${item.fontname}`
                            css += `
                                 @font-face {
                                    font-family: '${item.name}';
                                    src: url(${fontSrc}) format('truetype')
                                }
                            `
                        })
                        let style = document.createElement('style')
                        style.type = 'text/css'
                        style.innerHTML = css
                        this.$refs.videoClip.appendChild(style)
                    }
                }
            })
        },
        // 随机字符串
        randomString(len) {
            len = len || 10;
            let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
            let maxPos = $chars.length;
            let pwd = '';
            for (let i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },
        // 获取真实地址
        getFilePath(node) {
            let imgURL = "";
            try {
                let file = null;
                if (node.files && node.files[0]) {
                    file = node.files[0];
                } else if (node.files && node.files.item(0)) {
                    file = node.files.item(0);
                }
                try {
                    imgURL = file.getAsDataURL();
                } catch (e) {
                    imgURL = window.URL.createObjectURL(file);
                }
            } catch (e) {
                if (node.files && node.files[0]) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        imgURL = e.target.result;
                    };
                    reader.readAsDataURL(node.files[0]);
                }
            }
            return imgURL;
        },
        // 选择文件
        upload(type, callback) {
            if (document.querySelector('#file')) {
                document.querySelector('#file').remove()
            }
            let inputObj = document.createElement('input')
            inputObj.setAttribute('id', 'file');
            inputObj.setAttribute('type', 'file');
            inputObj.setAttribute('accept', type);
            inputObj.setAttribute('name', 'file');
            inputObj.setAttribute("style", 'visibility:hidden');
            document.body.appendChild(inputObj);
            inputObj.value;
            inputObj.click();

            document.querySelector('#file').addEventListener('change', e => {
                let filePath = this.getFilePath(e.target);
                let str = {
                    path: filePath,
                }
                if (type === 'image/*') {
                    let img = this.getNaturalWidth(filePath)
                    this.xw_show(e.target.files, base => {
                        setTimeout(() => {
                            str.width = img.width
                            str.height = img.height
                            str.base64 = base
                            inputObj.remove()
                            callback(str)
                        }, 500)
                    })
                } else if (type === 'audio/mp3') {
                    let audio = this.getAudioDuration(filePath)
                    let a = e.target.value.split('\\')

                    this.xw_show(e.target.files, base => {
                        setTimeout(() => {
                            str.duration = audio.duration
                            str.fileName = a[a.length - 1]
                            str.base64 = base
                            inputObj.remove()
                            callback(str)
                        }, 500)
                    })
                } else {
                    let video = this.getVideoDuration(filePath)
                    let a = e.target.value.split('\\')
                    setTimeout(() => {
                        let width = video.videoWidth
                        let height = video.videoHeight
                        if (width < 960) {
                            alert('请上传宽度960以上的视频')
                            return false
                        }

                        let wp = 960 / width
                        let hp = height * wp
                        this.videoData = {
                            id: this.randomString(),
                            duration: video.duration,
                            fileName: a[a.length - 1],
                            files: e.target.files,
                            width: width,
                            height: height,
                            filePath: filePath,
                            proportion: parseFloat(wp.toFixed(2)),
                            vw: 960,
                            vh: hp
                        }
                    }, 500)
                }
            });
        },
        // 获取base64
        xw_show(xw_filedata, callback) {
            let imgReaderl = new FileReader();
            imgReaderl.onload = function (evt) {
                callback(evt.target.result)
            }
            imgReaderl.readAsDataURL(xw_filedata[0]);
        },
        // 获取图片原始宽高
        getNaturalWidth(src) {
            let image = new Image()
            image.src = src
            return image
        },
        // 获取音频时长
        getAudioDuration(src) {
            let audio = new Audio()
            audio.src = src
            return audio
        },
        // 获取音频时长
        getVideoDuration(src) {
            let video = document.createElement('video')
            video.src = src
            return video
        },
        // 播放按钮
        videoBtn() {
            let video = this.$refs.video
            if (!this.state) {
                video.play()
                this.state = true
            } else {
                video.pause()
                this.state = false
            }
        },
        // 视频位置跳转
        videoTimeJump() {
            let video = this.$refs.video
            let val = parseFloat(this.videoTimeInput)
            if (val) {
                video.pause()
                this.state = false
                video.currentTime = val
            }
        },
        // 进度条点击
        rangeChange() {
            if (this.state) {
                this.$refs.video.pause()
                this.state = false
                return false
            }
            this.$refs.video.currentTime = this.$refs.video.duration * (this.$refs.range.value / 100)
        },
        // 选择视频
        addVideo() {
            this.upload('audio/mp4', val => {
                console.log('添加成功');
            })
        },
        // 添加音频
        addAudio() {
            this.upload('audio/mp3', val => {
                let addAudioData = JSON.parse(JSON.stringify(this.addAudioData))
                let id = this.randomString()
                addAudioData.id = id
                addAudioData.type = 'audio'
                addAudioData.path = val.path
                addAudioData.duration = val.duration
                addAudioData.fileName = val.fileName
                addAudioData.base64 = val.base64
                addAudioData.currentTime = this.currentTime

                let dataListArr = this.dataListArr
                dataListArr.unshift(addAudioData)
                this.dataListArr = dataListArr
                this.editorId = id
                this.resetText()
                this.canvasTime()
            })
        },
        // 添加文字
        addText() {
            if (!this.addTextData.text) {
                this.$message({
                    message: '请输入文本',
                    type: 'warning'
                });
                return false
            }
            let id = this.randomString()
            this.addTextData.currentTime = this.currentTime
            this.addTextData.id = id
            this.addTextData.continuous = (this.videoData.duration - this.currentTime).toFixed(2)
            this.addTextData.type = 'text'
            let str = JSON.parse(JSON.stringify(this.addTextData))
            let dataListArr = this.dataListArr
            dataListArr.unshift(str)
            this.dataListArr = dataListArr
            this.editorId = id
            this.resetText()
            this.canvasTime()
        },
        // 添加图片
        addImages() {
            this.upload('image/*', val => {
                let id = this.randomString()
                let addImagesData = JSON.parse(JSON.stringify(this.addImagesData))
                addImagesData.type = 'img'
                addImagesData.id = id
                addImagesData.currentTime = this.currentTime
                addImagesData.base64 = val.base64
                addImagesData.path = val.path
                addImagesData.width = val.width
                addImagesData.height = val.height
                addImagesData.continuous = (this.videoData.duration - this.currentTime).toFixed(2)
                let dataListArr = this.dataListArr
                dataListArr.unshift(addImagesData)
                this.dataListArr = dataListArr
                this.editorId = id
                this.resetText()
                this.canvasTime()
            })
        },
        // 文本输入重置
        resetText() {
            this.addTextData = {
                text: '',
                size: 40,
                color: '#000000',
                style: 'normal',
                currentTime: 0,
                continuous: 1,
                x: 0,
                y: 0,
                font: this.defaultFont,
                animation: 0,
                background: null,
                zIndex: 1,
                padding: 0
            }
        },
        // 编辑
        editor(item) {
            this.editorId = item.id
            // 跳转到
            let video = this.$refs.video
            video.currentTime = item.currentTime
        },
        // 保存
        save() {
            this.editorId = ''
            this.audioPosition()
        },
        // 画图
        canvasDraw() {
            this.dataListArr.map(item => {
                // 画图
                if (item.type === 'img') {
                    let dom = this.$refs.canvasList.children
                    for (let list of dom) {
                        if (list.id === item.id) {
                            let dom = document.getElementById(item.id)
                            dom.innerHTML = ''
                            let img = new Image()
                            img.src = item.path
                            img.style.pointerEvents = `none`
                            img.style.width = `${parseFloat(item.width) * this.videoData.proportion}px`
                            img.style.height = `${parseFloat(item.height) * this.videoData.proportion}px`
                            img.style.position = 'absolute'
                            img.style.zIndex = item.zIndex
                            img.style.top = `${parseFloat(item.y) * this.videoData.proportion}px`
                            img.style.left = `${parseFloat(item.x) * this.videoData.proportion}px`
                            dom.appendChild(img)
                        }
                    }
                }
                // 画文字
                if (item.type === 'text') {
                    let dom = this.$refs.canvasList.children
                    for (let list of dom) {
                        if (list.id === item.id) {
                            let dom = document.getElementById(item.id)
                            dom.innerHTML = ''
                            let p = document.createElement('p')
                            p.style.position = 'absolute'
                            p.style.pointerEvents = `none`
                            p.style.zIndex = item.zIndex
                            p.style.top = `${parseFloat(item.y) * this.videoData.proportion}px`
                            p.style.left = `${parseFloat(item.x) * this.videoData.proportion}px`
                            p.style.fontSize = `${parseFloat(item.size) * this.videoData.proportion}px`
                            p.style.lineHeight = `${parseFloat(item.size) * this.videoData.proportion}px`
                            p.style.textAlign = `left`
                            p.style.color = item.color
                            p.style.wordWrap = 'break-word'
                            p.style.fontFamily = item.font.split('.')[0]
                            p.style.padding = `${parseFloat(item.padding) * this.videoData.proportion}px`
                            p.style.marginTop = '0px'
                            p.style.marginBottom = '0px'
                            p.style.backgroundColor = item.background
                            if (item.style === 'normal') {
                                p.style.fontWeight = 'normal'
                            } else {
                                p.style.fontWeight = 'bold'
                            }
                            p.textContent = item.text
                            dom.appendChild(p)
                        }
                    }
                }
            })
        },
        // 时间轴
        canvasTime() {
            this.dataListArr.map(item => {
                let current = parseFloat(this.currentTime)
                let currentTime = parseFloat(item.currentTime)
                let continuous = parseFloat(item.continuous)
                if (
                    item.type === 'audio' &&
                    current > currentTime &&
                    (current < currentTime + parseFloat(item.duration) && this.isPlay || item.isLoop)
                ) {
                    let dom = document.getElementById(`audio${item.id}`)
                    dom.play()
                } else {
                    item.show = current >= currentTime && current < currentTime + continuous;
                }
            })
        },
        // 音频进度定位
        audioPosition() {
            let current = parseFloat(this.currentTime)
            this.dataListArr.map(item => {
                if (item.type === 'audio') {
                    let dom = document.getElementById(`audio${item.id}`)
                    if (current - item.currentTime <= 0) {
                        dom.pause()
                    }
                    dom.currentTime = current - item.currentTime
                }
            })
        },
        preview() {
            console.log(this.dataListArr);
            // return false;
            let formData = new window.FormData();
            formData.append("file", this.videoData.files[0]);
            formData.append("id", this.videoData.id);
            formData.append("duration", this.videoData.duration);
            formData.append('data', JSON.stringify(this.dataListArr));
            let xhr = new XMLHttpRequest();
            xhr.open("post", "http://192.168.1.81:12021/");
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText);
                }
            }
            xhr.send(formData);
        },
        // 删除元素
        del(e) {
            for (let i = 0; i < this.dataListArr.length; i++) {
                if (this.dataListArr[i].id === e.id) {
                    if (this.dataListArr[i].type === "music") {
                        this.isAudio = false
                    }
                    this.dataListArr.splice(i, 1)
                }
            }
        },
        // 静音
        muted() {
            this.isMuted = !this.isMuted
        },
        // 拖拽
        mousedownHandleelse() {
            this.isDrag = true
        },
        mouseupHandleelse() {
            this.isDrag = false
        },
        mouseDownHandleelse(event, item) {
            if (this.isDrag && this.editorId) {
                if (!event.target.id) {
                    return false
                }
                let proportion = parseFloat(this.videoData.proportion)
                let x = event.offsetX <= 0 ? 0 : event.offsetX
                let y = event.offsetY <= 0 ? 0 : event.offsetY
                item.x = x * (1 - proportion + 1)
                item.y = y * (1 - proportion + 1)
                event.preventDefault();
            }
        }
    }
}
</script>

<style lang="less">
    .el-tabs__content {
        height: 100%;width: 100%;
    }

    .el-input, .el-select {
        display: flex;width: auto;flex: 1;

        input {
            display: flex;
        }
    }

    .timeBox {
        .el-input {
            height: 20px;

            input {
                height: 20px !important;padding: 0;text-align: center;
            }
        }
    }

    .el-color-picker__mask {
        width: 98px !important;
    }

    .el-color-picker__trigger {
        width: 100px !important;
    }
</style>
<style scoped lang="less">
    .videoClip {
        display: flex;width: 100%;height: 100%;

        .tab {
            height: 100%;display: flex;flex: 1;justify-content: center;align-items: center;

            .addImages {
                width: 200px;height: 60px;
            }

            .el-tabs {
                display: flex;width: 100%;height: 100%;
            }

        }

    }

    .canvas {
        display: flex;width: 975px;border-left: 1px solid #e8e8e8;padding: 0 0 0 15px;box-sizing: border-box;margin: 0 15px 0 15px;
        position: relative;

        .videoBox {
            margin-top: 15px;position: relative;display: flex;width: 100%;

            .video {
                display: flex;width: 960px;flex-direction: column;

                .controls {
                    display: flex;width: 100%;margin-top: 15px;align-items: center;

                    p {
                        display: flex;height: 15px;padding: 0;margin: 0 10px;justify-content: center;align-items: center;

                        &.pause {
                            background: url("data:image/png;base64,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") no-repeat center center;
                            background-size: 15px 15px;width: 15px;
                        }

                        &.play {
                            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAJF0lEQVR4Xu2Zva6UZRhF92nECu7BRgtBxdLW2OBPIgEN3AhUCA3cCKiIJio0JpaW/gEWNt4DnWKBeZNjIBESzpznWe/4zpqG5sy3z6w9i80T9rJdr5eSvJ3kdJJ3NvjVvktyK8n3Sf7Y4P2+ZXMCS3a3tzmP8neeSXKz8KnjeUMWX/0EKrt7lOTstnS3LYJUAn7y66Ak/y85/v1tt0aSbRDkVJJvk3T8LgP0e0nu9H9PdjJhdHe76ZNvRXcdX8qD8rqe5NxB33SAn7+R5PwBft4ffX4Cy3c3W5DjSe4+fx8b/+SJJPc2frdvfBoBqruRc39WBbMFuZrkAvDhryW5COTsUsROdDdbkJ+TvA58q35J8gaQs0sRVHcj5+QssDMFOZLkQZLxZ/frryTHkow/fR2eAN3d0SQPD/9rH/wJMwV5Lcn4m516jaX6lQpbPIfubuQRt+p/apspyEdJPgO/SB8n+RzMWzlqsPwU/IDju1L5n8jP/avPFORSkk+e+zc9/A+OrMuHf4xP2O9t9Ee9RtYVKuzJnJmCjC8sCXnIQQo5o08qk+5u2l9uCkJ9pdbKURCgTxqyC1JXKt2dC1LX3TOfpCB1kBWkjuUzn0RDVpC6UunuXJC67lwQgKWCLAjZBakrVUHqWPpPLIAlHaEgAHEasgtSVyrdnTdIXXfeIABLBVkQsgtSV6qC1LH0BgFY0hEKAhCnIbsgdaXS3XmD1HXnDQKwVJAFIbsgdaUqSB1LbxCAJR2hIABxGrILUlcq3Z03SF133iAASwVZELILUleqgtSx9AYBWNIRCgIQpyG7IHWl0t15g9R15w0CsFSQBSG7IHWlKkgdS28QgCUdoSAAcRqyC1JXKt2dN0hdd94gAEsFWRCyC1JXqoLUsfQGAVjSEQoCEKchuyB1pdLdeYPUdecNArBUkAUhuyB1pSpIHUtvEIAlHaEgAHEasgtSVyrdnTdIXXfeIABLBVkQsgtSV6qC1LH0BgFY0hEKAhCnIbsgdaXS3XmD1HXnDQKwVJAFIbsgdaUqSB1LbxCAJR2hIABxGrILUlcq3Z03SF133iAASwVZELILUleqgtSx9AYBWNIRCgIQpyG7IHWl0t15g9R15w0CsFSQBSG7IHWlKkgdS28QgCUdoSAAcRqyC1JXKt2dN0hdd94gAEsFWRCyC1JXqoLUsfQGAVjSEQoCEKchuyB1pdLdeYPUdecNArBUkAUhuyB1pSpIHUtvEIAlHaEgAHEasgtSVyrdnTdIXXfeIABLBVkQsgtSV6qC1LH0BgFY0hEKAhCnIbsgdaXS3XmD1HXnDQKwVJAFIbsgdaUqSB1LbxCAJR2hIABxGrILUlcq3Z03SF133iAASwVZELILUleqgtSx9AYBWNIRCgIQpyG7IHWl0t15g9R15w0CsFSQBSG7IHWlKkgdS28QgCUdoSAAcRqyC1JXKt2dN0hdd94gAEsFWRCyC1JXqoLUsfQGAVjSEQoCEKchuyB1pdLdeYPUdecNArBUkAUhuyB1pSpIHUtvEIAlHaEgAHEasgtSVyrdnTdIXXfeIABLBVkQsgtSV6qC1LH0BgFY0hEKAhCnIbsgdaXS3XmD1HXnDQKwVJAFIbsgdaUqSB1LbxCAJR1BC3IpyRX6Q468vRmh+5njQw/Q1Gvav2OpDwjmKAgAW0EAyE0RCtIE9snHKggAuSlCQZrAKggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEACyCwJAbopQkCawLggAFohQEAAyvSCXk4xifR2eAC3IyBv94a89PPFx4IdJvgTzTyf5CsxbOWqwvAV+wGndzRTk1ST3QMjHk9wH81aOorsbeb/NADpTkBeSPEjyIvDB/0xyLMlDIGsXIo7sdzf+7H6N7o4m+bs76GnPnynI+H1+THIS+OA/JXkTyNmliJ3obrYgV5NcAL5V15JcBHJ2KWInupstyLgL7gLfqhPwvQN8pOkRVHdTb8fZgoyWryc511j3jSTnG5+/y49evrttEORUktuN37J3k9xpfP4uP3r57rZBkPEFO5PkZsM37WySLxqe6yMfE1i6u20RpEMS5eA0rpTkUZLRHfkfkc8ktU2CjF/y5SQfJHk/yVsb9PtDkq+TfJPk9w3e71s2J/DKfm9LdfcPUMox9rqizh8AAAAASUVORK5CYII=") no-repeat center center;
                            background-size: 15px 15px;width: 15px;
                        }

                    }

                    .rangeBox {
                        height: 20px;display: flex;flex: 1;

                        input {
                            width: 100%;
                        }
                    }

                    .timeBox {
                        width: 50px;display: flex;margin-left: 10px;

                        .el-input {
                            height: 20px;

                            input {
                                height: 20px !important;
                            }

                        }

                        input {
                            width: 100%;background: none;border: 1px solid #ddd;
                        }
                    }

                }
            }

            .canvasList {
                position: absolute;width: 100%;left: 0;top: 0;z-index: 2;

                div {
                    position: absolute;left: 0;top: 0;width: 100%;height: 100%;overflow: hidden;cursor: move;

                    p {
                        margin: 0 !important;padding: 0 !important;pointer-events: none;
                    }
                }
            }
        }
    }

    .inputDom {
        display: flex;width: 100%;flex-direction: column;

        .line1 {
            display: flex;width: 100%;

            label {
                display: flex;width: 100%;margin-bottom: 10px;align-items: center;

                p {
                    display: flex;width: 40px;height: 24px;padding: 0;margin: 0 10px 0 0;
                }

                input {
                    display: flex;flex: 1;background: none;border: 1px solid rgba(0, 0, 0, .3);height: 24px;line-height: 24px;font-size: 16px;
                    border-radius: 3px;text-indent: 5px;outline: none;
                }
            }
        }

        .line2 {
            display: flex;width: 100%;

            label {
                display: flex;flex: 1;margin-bottom: 10px;align-items: center;

                p {
                    display: flex;width: 40px;height: 24px;padding: 0;margin: 0 10px 0 0;
                }

                input {
                    display: flex;flex: 1;background: none;border: 1px solid rgba(0, 0, 0, .3);height: 24px;line-height: 24px;font-size: 16px;
                    border-radius: 3px;text-indent: 5px;outline: none;
                }

                .el-checkbox {
                    margin-bottom: 0 !important;padding-bottom: 0;
                }

                &:first-child {
                    margin-right: 15px;
                }
            }
        }
    }

    .addTextData {
        display: flex;width: 100%;flex-direction: column;height: 100%;overflow-y: scroll;

        .add {
            display: flex;width: 100%;flex-direction: column;

            .title {
                display: flex;font-size: 18px;margin: 10px 0;
            }

            .btn {
                display: flex;width: 100%;

                .add, .reset {
                    display: flex;flex: 1;justify-content: center;align-items: center;
                }
            }
        }

        .historyData {
            border-top: 1px solid #e8e8e8;width: 100%;display: flex;flex-direction: column;flex: 1;margin-top: 10px;

            .title {
                display: flex;font-size: 18px;margin: 10px 0;
            }

            .history {

                .list {
                    margin-bottom: 15px;border-bottom: 1px solid #e8e8e8;padding-bottom: 15px;

                    &:last-child {
                        border-bottom: 0;padding-bottom: 0;
                    }
                }

                .btn {
                    display: flex;width: 100%;

                    .add, .reset {
                        display: flex;flex: 1;justify-content: center;align-items: center;
                    }
                }
            }
        }
    }

    .addImagesData {
        display: flex;width: 100%;flex-direction: column;height: 100%;overflow-y: scroll;

        .add {
            display: flex;width: 100%;flex-direction: column;

            .title {
                display: flex;font-size: 18px;margin: 10px 0;
            }

            .btn {
                display: flex;width: 100%;

                .add, .reset {
                    display: flex;flex: 1;justify-content: center;align-items: center;
                }
            }
        }

        .historyData {
            border-top: 1px solid #e8e8e8;width: 100%;display: flex;flex-direction: column;flex: 1;margin-top: 10px;

            .title {
                display: flex;font-size: 18px;margin: 10px 0;
            }

            .history {
                .list {
                    display: flex;width: 100%;margin-bottom: 15px;padding-bottom: 15px;flex-direction: column;

                    .top {
                        display: flex;width: 100%;height: 200px;

                        p {
                            margin: 0;padding: 0;
                        }

                        strong {
                            display: flex;width: 200px;height: 200px;position: relative;justify-content: center;align-items: center;
                            border: 1px solid #e8e8e8;box-sizing: border-box;

                            img {
                                position: absolute;width: 100%;
                            }
                        }

                        span {
                            display: flex;flex: 1;margin-left: 10px;align-items: flex-start;flex-direction: column;

                            label {
                                display: flex;width: 100%;margin-bottom: 10px;align-items: center;

                                p {
                                    display: flex;width: 40px;height: 24px;padding: 0;margin: 0 10px 0 0;
                                }

                                input {
                                    display: flex;flex: 1;background: none;border: 1px solid rgba(0, 0, 0, .3);height: 24px;line-height: 24px;font-size: 16px;
                                    border-radius: 3px;text-indent: 5px;outline: none;
                                }
                            }
                        }
                    }

                    .bottom {
                        display: flex;width: 100%;margin-top: 10px;flex-direction: column;
                    }

                    &:last-child {
                        border-bottom: 0;padding-bottom: 0;
                    }
                }

                .btn {
                    display: flex;width: 100%;

                    .add, .reset {
                        display: flex;flex: 1;justify-content: center;align-items: center;
                    }
                }
            }
        }
    }

    .addAudioData {
        display: flex;width: 100%;flex-direction: column;height: 100%;overflow-y: scroll;

        .add {
            display: flex;width: 100%;flex-direction: column;

            .title {
                display: flex;font-size: 18px;margin: 10px 0;
            }

            .btn {
                display: flex;width: 100%;

                .add, .reset {
                    display: flex;flex: 1;justify-content: center;align-items: center;
                }
            }
        }

        .historyData {
            border-top: 1px solid #e8e8e8;width: 100%;display: flex;flex-direction: column;flex: 1;margin-top: 10px;

            .title {
                display: flex;font-size: 18px;margin: 10px 0;
            }

            .history {
                .list {
                    display: flex;width: 100%;margin-bottom: 15px;padding-bottom: 15px;flex-direction: column;border-bottom: 1px solid #e8e8e8;

                    p {
                        margin: 0 0 10px 0;padding: 0;display: flex;
                    }

                    label {
                        display: flex;width: 100%;margin-bottom: 10px;align-items: center;

                        p {
                            display: flex;width: 40px;height: 24px;padding: 0;margin: 0 10px 0 0;
                        }

                        input {
                            display: flex;flex: 1;background: none;border: 1px solid rgba(0, 0, 0, .3);height: 24px;line-height: 24px;font-size: 16px;
                            border-radius: 3px;text-indent: 5px;outline: none;
                        }
                    }

                    &:last-child {
                        border-bottom: 0;padding-bottom: 0;
                    }
                }

                .btn {
                    display: flex;width: 100%;

                    .add, .reset {
                        display: flex;flex: 1;justify-content: center;align-items: center;
                    }
                }
            }
        }
    }

    .canvasList {
        width: 100%;
    }

    .videoInformation {
        display: flex;flex: 1;width: 100%;

        .information {
            display: flex;flex: 1;margin-right: 30px;flex-direction: column;

            p {
                display: flex;margin-top: 10px;margin-bottom: 0;
            }
        }

        .btn {
            display: flex;width: 120px;height: 100%;justify-content: center;align-items: center;flex-direction: column;

            button {
                width: 100%;margin: 0 0 10px 0;
            }
        }
    }

    ::-webkit-scrollbar {width: 0}
</style>
