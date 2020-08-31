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
                        "imageId": "two/1.5191KB.DCM"
                    },
                    {
                        "imageId": "two/2.516KB.DCM"
                    },
                    {
                        "imageId": "two/3.79KB.DCM"
                    },
                    {
                        "imageId": "two/test.dcm"
                    }
                ]
            },
            {
                "seriesUid": "2.516",
                "seriesDescription": "SCOUT PA",
                "seriesNumber": "1",
                "instanceList": [
                    {
                        "imageId": "two/2.516KB.DCM"
                    }
                ]
            },
            {
                "seriesUid": "3.79",
                "seriesDescription": "SCOUT LAT",
                "seriesNumber": "1.1",
                "instanceList": [
                    {
                        "imageId": "two/3.79KB.DCM"
                    }
                ]
            }
        ]
    }
}

export default {
    dicomList,
    dicomContent
}
