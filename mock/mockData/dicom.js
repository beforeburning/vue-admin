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

export default {
    dicomList,
    dicomContent
}
