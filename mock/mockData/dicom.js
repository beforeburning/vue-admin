/**
 Function: 影像系统mock数据
 User: burning <923398776@qq.com>
 Date: 2020年08月27日
 */

const dicomList = [
    {
        "name": "患者1",
        "id": "patients1",
        "date": "1598520822",
        "start": "MR",
        "description": "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
        "numImages": 14,
        "studyId": "1"
    },
    {
        "name": "患者2",
        "id": "patients2",
        "date": "1598520966",
        "start": "MR",
        "description": "描述描述",
        "numImages": 4,
        "studyId": "2"
    }
]

const dicomContent = {
    patients1: {
        "patientName": "MISTER^CT",
        "patientId": "2178309",
        "studyDate": "20010105",
        "modality": "CT",
        "studyDescription": "CHEST",
        "numImages": 111,
        "studyId": "two",
        "seriesList": [
            {
                "seriesUid": "1.5191",
                "seriesDescription": "HELICAL CHEST",
                "seriesNumber": "2",
                "instanceList": [
                    {
                        "imageId": "MR-DICOM/000e6a9a.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6a9b.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6a9c.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6a9d.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6a9e.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6a9f.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6a98.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6a99.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa0.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa1.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa2.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa3.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa4.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa5.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa6.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa7.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aa8.dcm"
                    },
                ]
            },
            {
                "seriesUid": "2.516",
                "seriesDescription": "SCOUT PA",
                "seriesNumber": "1",
                "instanceList": [
                    {
                        "imageId": "MR-DICOM/000e6aa9.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aaa.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aab.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aac.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aad.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aae.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6aaf.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab0.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab1.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab2.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab3.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab4.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab5.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab6.dcm"
                    },
                    {
                        "imageId": "MR-DICOM/000e6ab7.dcm"
                    },
                ]
            },
            {
                "seriesUid": "3.79",
                "seriesDescription": "SCOUT LAT",
                "seriesNumber": "1.1",
                "instanceList": []
            }
        ]
    }
}

const dicomDefaultData = {
    "patients1": {
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

export default {
    dicomList,
    dicomContent,
    dicomDefaultData
}
