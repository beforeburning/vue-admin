const webpack = require("webpack")
const join = require('path').join;
const resolve = dir => join(__dirname, dir);

module.exports = {
    runtimeCompiler: true,
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             'cornerstone': 'cornerstone-core',
    //             'dicomParser': 'dicom-parser',
    //             'cornerstoneWADOImageLoader': resolve("public/dist/cornerstoneWADOImageLoader.js")
    //         }
    //     },
    //     plugins: [
    //         // 使用 cornerstone-core & dicom-parser & cornerstoneWADOLoader
    //         new webpack.ProvidePlugin({
    //             cornerstone: "cornerstone-core",
    //             "window.cornerstone": "cornerstone-core",
    //             dicomParser: 'dicom-parser',
    //             "window.dicomParser": "dicom-parser",
    //             cornerstoneWADOImageLoader: "cornerstoneWADOImageLoader",
    //             "window.cornerstoneWADOImageLoader": "cornerstoneWADOImageLoader"
    //         })
    //     ],
    // },
}
