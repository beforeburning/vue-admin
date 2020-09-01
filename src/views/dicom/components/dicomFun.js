/**
 Function: dicon的方法集合
 User: burning <923398776@qq.com>
 Date: 2020年08月31日
 */

import corn from "@/views/dicom/components/index";
import tools from "@/views/dicom/components/index";

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

// // 监听加载进度
export const tool = () => {
    // Enable Inputs

    // corn.cornerstone.events.addEventListener('cornerstoneimageloadprogress', function (event) {
    //     const eventData = event.detail.percentComplete;
    //     // console.log(eventData);
    //     // const loadProgress = document.getElementById('loadProgress');
    //     // loadProgress.textContent = `Image Load Progress: ${eventData.percentComplete}%`;
    // })
}
