/**
 Function: dicon的方法集合
 User: burning <923398776@qq.com>
 Date: 2020年08月31日
 */

import corn from "@/views/dicom/components/index";

// 创建canvas的盒子
export const enable = div => {
    corn.cornerstone.enable(div);
}

// 解析dicom
export const parser = (url, callback) => {
    corn.cornerstone.loadImage(url).then(image => {
        callback(image)
    }, err => {
        console.log('加载失败', err);
        callback(false);
    });
}

// 初始化canvas
export const getDefaultViewportForImage = (canvas, url) => {
    return corn.cornerstone.getDefaultViewportForImage(canvas, url);
}

// 显示图像
export const displayImage = (canvas, image, viewport) => {
    corn.cornerstone.displayImage(canvas, image, viewport);
}

// 刷新canvas
export const resize = canvas => {
    corn.cornerstone.resize(canvas, true);
}

// 工具栏
export const dicomTool = {
    // 开启鼠标控制
    init(canvas, allImageIds) {
        corn.cornerstoneTools.init({
            // 监听鼠标元素
            mouseEnabled: true,
            // 监听touch元素
            touchEnabled: true,
            globalToolSyncEnabled: false,
            showSVGCursors: false,
        });

        // 工具的颜色
        corn.cornerstoneTools.toolStyle.setToolWidth(1);
        corn.cornerstoneTools.toolColors.setToolColor('rgb(255, 0, 0)');
        corn.cornerstoneTools.toolColors.setActiveColor('rgb(0, 255, 0)');

        // 绑定元素
        corn.cornerstone.enable(canvas);

        // 添加工具
        this.addTool(canvas, allImageIds);

        // 比例工具
        const ScaleOverlayTool = corn.cornerstoneTools.ScaleOverlayTool;
        corn.cornerstoneTools.addTool(ScaleOverlayTool)
        corn.cornerstoneTools.setToolActive('ScaleOverlay', {mouseButtonMask: 1})
    },
    // 监听各个参数
    imageRenderedMonitoring(canvas, callback) {
        canvas.addEventListener('cornerstoneimagerendered', e => {
            const contextData = e.detail;
            const viewport = corn.cornerstone.getViewport(canvas);
            let zoomValue = viewport.scale.toFixed(3);
            let wwwcValue = Math.round(viewport.voi.windowWidth) + "/" + Math.round(viewport.voi.windowCenter);
            let renderTime = contextData.renderTimeInMs.toFixed(3);
            callback({
                zoom: zoomValue,
                wwwc: wwwcValue,
                renderTime,
            })
        });
    },
    newImageMonitoring(canvas, callback) {
        canvas.addEventListener('cornerstonenewimage', (e) => {
            let toolData = corn.cornerstoneTools.getToolState(canvas, 'stack');
            let stack = toolData.data[0];
            callback({
                currentImageIdIndex: stack.currentImageIdIndex + 1,
                imageIds: stack.imageIds.length,
                frameRate: e.detail.frameRate
            })
        })
    },
    addTool(canvas, allImageIds) {
        // 添加亮度调整工具
        const WwwcTool = corn.cornerstoneTools.WwwcTool;
        corn.cornerstoneTools.addTool(WwwcTool)

        // 添加放大工具
        const ZoomTool = corn.cornerstoneTools.ZoomTool;
        corn.cornerstoneTools.addTool(ZoomTool, {
            // Optional configuration
            configuration: {
                invert: false,
                preventZoomOutsideImage: false,
                minScale: .1,
                maxScale: 20.0,
            }
        });

        // 添加平移工具
        const PanTool = corn.cornerstoneTools.PanTool;
        corn.cornerstoneTools.addTool(PanTool)

        // 添加堆叠工具
        const StackScrollTool = corn.cornerstoneTools.StackScrollTool
        const StackScrollMouseWheelTool = corn.cornerstoneTools.StackScrollMouseWheelTool;
        corn.cornerstoneTools.addTool(StackScrollTool);
        corn.cornerstoneTools.addTool(StackScrollMouseWheelTool)

        const stack = {
            currentImageIdIndex: 0,
            imageIds: allImageIds
        }
        corn.cornerstoneTools.addStackStateManager(canvas, ['stack'])
        corn.cornerstoneTools.addToolState(canvas, 'stack', stack)

        // 长度测量工具
        const LengthTool = corn.cornerstoneTools.LengthTool;
        corn.cornerstoneTools.addTool(LengthTool)

        // 角度测量工具
        const AngleTool = corn.cornerstoneTools.AngleTool;
        corn.cornerstoneTools.addTool(AngleTool)

        // 探针工具
        const ProbeTool = corn.cornerstoneTools.ProbeTool;
        corn.cornerstoneTools.addTool(ProbeTool)

        // 橡皮擦工具
        const EraserTool = corn.cornerstoneTools.EraserTool;
        corn.cornerstoneTools.addTool(EraserTool)

    },
    // 工具集合
    toolCollection(type) {
        // 亮度调整
        if (type === 'Wwwc') {
            corn.cornerstoneTools.setToolActive('Wwwc', {mouseButtonMask: 1})
        }
        if (type === 'Zoom') {
            corn.cornerstoneTools.setToolActive('Zoom', {mouseButtonMask: 1})
        }
        if (type === 'Pan') {
            corn.cornerstoneTools.setToolActive('Pan', {mouseButtonMask: 1})
        }
        if (type === 'StackScrollTool') {
            corn.cornerstoneTools.setToolActive('StackScroll', {mouseButtonMask: 1})
            // corn.cornerstoneTools.setToolActive('StackScrollMouseWheel', { })
        }
        if (type === 'Length') {
            corn.cornerstoneTools.setToolActive('Length', {mouseButtonMask: 1})
        }
        if (type === 'Angle') {
            corn.cornerstoneTools.setToolActive('Angle', {mouseButtonMask: 1})
        }
        if (type === 'Probe') {
            corn.cornerstoneTools.setToolActive('Probe', {mouseButtonMask: 1})
        }
        if (type === 'Eraser') {
            corn.cornerstoneTools.setToolActive('Eraser', {mouseButtonMask: 1})
        }
    },
    // 禁用所有工具
    disableAllTools() {
        corn.cornerstoneTools.setToolPassive('Wwwc')
        corn.cornerstoneTools.setToolPassive('Zoom')
        corn.cornerstoneTools.setToolPassive('Pan')
        corn.cornerstoneTools.setToolPassive('StackScroll')
        corn.cornerstoneTools.setToolPassive('Length')
        corn.cornerstoneTools.setToolPassive('Angle')
        corn.cornerstoneTools.setToolPassive('Probe')
    }
}
