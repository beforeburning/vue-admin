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

    // 加载进度 不知道为什么undefined (?)
    corn.cornerstone.events.addEventListener("cornerstoneimageloadprogress", function (event) {
            const eventData = event.detail.percentComplete;
            console.log(eventData);
        }
    );
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
    // 亮度调整
    wwwc(canvas) {
        corn.cornerstoneTools.wwwc.activate(canvas, 1); // ww/wc is the default tool for left mouse button
        corn.cornerstoneTools.wwwcTouchDrag.activate(canvas);
    },
    // 反色
    invert(canvas, isInvert) {
        let viewport = corn.cornerstone.getViewport(canvas);
        viewport.invert = isInvert;
        corn.cornerstone.setViewport(canvas, viewport);
    },
    // 禁用所有工具
    disableAllTools(canvas) {
        corn.cornerstoneTools.wwwc.disable(canvas);
    }
}
