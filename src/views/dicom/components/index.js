/**
 Function: 注册基石组件
 User: burning <923398776@qq.com>
 Date: 2020年08月31日
 */

//引入 cornerstone,dicomParser,cornerstoneWADOImageLoader
import * as cornerstone from "cornerstone-core";
import * as dicomParser from "dicom-parser";
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

// 配置 webWorker
// const config = {
//     webWorkerPath: "/utils/dicom/cornerstoneWADOImageLoaderWebWorker.js",
//     taskConfiguration: {
//         decodeTask: {
//             codecsPath: "/utils/dicom/cornerstoneWADOImageLoaderCodecs.js"
//         }
//     }
// };
// cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

export default {
    cornerstone,
    cornerstoneTools
}
