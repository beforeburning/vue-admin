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
    corn.cornerstone.loadAndCacheImage(url).then(image => {
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
    init(canvas) {
        corn.cornerstoneTools.mouseInput.enable(canvas);
        corn.cornerstoneTools.mouseWheelInput.enable(canvas);
        corn.cornerstoneTools.touchInput.enable(canvas);
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
    // 亮度调整
    wwwc(canvas) {
        corn.cornerstoneTools.wwwc.activate(canvas, 1); // ww/wc is the default tool for left mouse button
        corn.cornerstoneTools.wwwcTouchDrag.activate(canvas);
    },
    // 反色
    invert(canvas, isInvert) {
        const viewport = corn.cornerstone.getViewport(canvas);
        viewport.invert = isInvert;
        corn.cornerstone.setViewport(canvas, viewport);
    },
    // 放大
    zoom(canvas) {
        corn.cornerstoneTools.zoom.activate(canvas, 5); // 5 is right mouse button and left mouse button
        corn.cornerstoneTools.zoomTouchDrag.activate(canvas);
    },
    // 移动
    pan(canvas) {
        corn.cornerstoneTools.pan.activate(canvas, 3); // 3 is middle mouse button and left mouse button
        corn.cornerstoneTools.panTouchDrag.activate(canvas);
    },
    // 滚动
    stackScroll(canvas, canvasStack) {
        corn.cornerstoneTools.addStackStateManager(canvas, ["stack"]);
        corn.cornerstoneTools.addToolState(canvas, "stack", canvasStack);//将工具状态添加到toolStateManager，这由工具以及恢复已保存状态的模块完成。addToolState(element, toolType, measurementData)
        corn.cornerstoneTools.stackScroll.activate(canvas, 5);
        corn.cornerstoneTools.stackScrollTouchDrag.activate(canvas, 5);
    },
    // 禁用所有工具
    disableAllTools(canvas) {
        corn.cornerstoneTools.wwwc.disable(canvas);
        corn.cornerstoneTools.wwwcTouchDrag.deactivate(canvas);
        corn.cornerstoneTools.zoom.disable(canvas);
        corn.cornerstoneTools.zoomTouchDrag.deactivate(canvas);
        corn.cornerstoneTools.pan.disable(canvas);
        corn.cornerstoneTools.panTouchDrag.deactivate(canvas);
        corn.cornerstoneTools.stackScroll.disable(canvas);
        corn.cornerstoneTools.stackScrollTouchDrag.deactivate(canvas);

    }
}
