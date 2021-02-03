<template>
    <div>
        <el-time-picker
            is-range
            v-model="value1"
            format='HH:mm'
            :picker-options="{
                step: '00:15',
            }"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
        </el-time-picker>

        <el-time-select
            v-model="value"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间">
        </el-time-select>

        <el-radio-group v-model="radio2">
            <el-radio :label="1">备选项</el-radio>
            <el-radio :label="2">备选项</el-radio>
            <el-radio :label="3">备选项</el-radio>
        </el-radio-group>

        <div>

            <div v-for="(item, index) in data" :key="index">
                <div style="margin-top: 10px">
                    {{ index }}-{{ item.questionContent }}
                </div>

                <aaa v-for="(item, index) in item.linkageArray" :key="index" :data="item"></aaa>
            </div>

        </div>

    </div>
</template>

<script>
 import aaa from './aaa'
 import bus from './bus'

 export default {
     name: "calendar",
     components: {aaa},
     data() {
         return {
             radio2: 1,
             value: '',
             value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
             data: [
                 {
                     "serialNo": 1,
                     "questionContent": "你吃饭了吗",
                     "optionArray": [
                         {
                             "id": "jbKYGbkiMptJBxrRidXXikBdETafDTBG",
                             "content": "吃了"
                         },
                         {
                             "id": "scpkfKbWETzYyjFTcKsrQBezSQHwHkat",
                             "content": "没吃"
                         }
                     ],
                     "linkageArray": [
                         {
                             "condition": [
                                 {
                                     "id": "jbKYGbkiMptJBxrRidXXikBdETafDTBG",
                                     "content": "吃了"
                                 }
                             ],
                             "linkageVal": [
                                 {
                                     "questionContent": "吃的什么",
                                     "type": 2,
                                     "optionArray": [
                                         {
                                             "id": "wKjPhrjeBeBdJhPKnDszrdbsdkCiMJKc",
                                             "content": "饭"
                                         },
                                         {
                                             "id": "ynAncZwnhesjipPZRcBxdGYZRQYTGBjF",
                                             "content": "菜"
                                         }
                                     ]
                                 }
                             ]
                         },
                         {
                             "condition": [
                                 {
                                     "id": "scpkfKbWETzYyjFTcKsrQBezSQHwHkat",
                                     "content": "没吃"
                                 }
                             ],
                             "linkageVal": [
                                 {
                                     "questionContent": "为什么",
                                     "type": 2,
                                     "optionArray": [
                                         {
                                             "id": "QNDYtMdXeCNJdktmaQXNKTCsMJdjXsXS",
                                             "content": "不饿"
                                         },
                                         {
                                             "id": "xjDGDDHphpHwPkDRJkBKfnKWWrxSEtmp",
                                             "content": "不想吃"
                                         }
                                     ],
                                     "linkageArray": [
                                         {
                                             "condition": [
                                                 {
                                                     "id": "xjDGDDHphpHwPkDRJkBKfnKWWrxSEtmp",
                                                     "content": "不想吃"
                                                 }
                                             ],
                                             "linkageVal": [
                                                 {
                                                     "questionContent": "吃点吧",
                                                     "type": 2,
                                                     "optionArray": [
                                                         {
                                                             "id": "GDEEDeWbtRpbFAyGQYjcaenGRTcdEDfX",
                                                             "content": "好"
                                                         },
                                                         {
                                                             "id": "ZmRFRtmkXEnMCienPdXFXjXFSjfmccnM",
                                                             "content": "不好"
                                                         },
                                                         {
                                                             "id": "zGzRkAJhjzjsEwZWpJSKJdsRctnFnyRG",
                                                             "content": "其他"
                                                         }
                                                     ],
                                                     "linkageArray": [
                                                         {
                                                             "condition": [
                                                                 {
                                                                     "id": "zGzRkAJhjzjsEwZWpJSKJdsRctnFnyRG",
                                                                     "content": "其他"
                                                                 }
                                                             ],
                                                             "linkageVal": [
                                                                 {
                                                                     "questionContent": "",
                                                                     "type": 1,
                                                                     "optionArray": [
                                                                         {
                                                                             "id": "hBcZDZxyQMjCXNAfPPFhiGpAMMWpjafn",
                                                                             "content": ""
                                                                         },
                                                                         {
                                                                             "id": "aENkskexXCycHWswSPGBDKkXDfxHxeCN",
                                                                             "content": ""
                                                                         }
                                                                     ]
                                                                 }
                                                             ]
                                                         }
                                                     ]
                                                 }
                                             ]
                                         }
                                     ]
                                 }
                             ]
                         }
                     ]
                 },
                 {
                     "serialNo": 2,
                     "type": 2,
                     "questionContent": "你喝水了吗",
                     "optionArray": [
                         {
                             "id": "BbwMJhcbQcBpSHQJMcNxKcsCfbZKBeFa",
                             "content": "喝了"
                         },
                         {
                             "id": "fEswWjrctwSXxkEFyAZpQkRiQPBZmQnE",
                             "content": "没喝"
                         }
                     ],
                     "needCalculation": false,
                     "linkageArray": [
                         {
                             "condition": [
                                 {
                                     "id": "BbwMJhcbQcBpSHQJMcNxKcsCfbZKBeFa",
                                     "content": "喝了"
                                 }
                             ],
                             "linkageVal": [
                                 {
                                     "questionContent": "喝的什么水",
                                     "type": 2,
                                     "optionArray": [
                                         {
                                             "id": "a1111",
                                             "content": "矿泉水"
                                         },
                                         {
                                             "id": "a2222",
                                             "content": "开水"
                                         },
                                         {
                                             "id": "a3333",
                                             "content": "饮料"
                                         }
                                     ]
                                 }
                             ]
                         },
                         {
                             "condition": [
                                 {
                                     "id": "fEswWjrctwSXxkEFyAZpQkRiQPBZmQnE",
                                     "content": "没喝"
                                 }
                             ],
                             "linkageVal": [
                                 {
                                     "questionContent": "为什么",
                                     "type": 2,
                                     "optionArray": [
                                         {
                                             "id": "a4444",
                                             "content": "不渴"
                                         },
                                         {
                                             "id": "a5555",
                                             "content": "没水喝"
                                         }
                                     ],
                                 }
                             ]
                         }
                     ]
                 }
             ]
         }
     },
     methods: {
         init(id) {
             this.data.map(index => {
                 let serialNo = index.serialNo
                 const a = children => {
                     console.log(children);
                     children.map(item => {
                         let condition = item.condition[0].id;
                         if (id === condition) {
                             console.log(serialNo);
                             return false
                         }
                         item.linkageVal[0].optionArray.map(item2 => {
                             let condition = item2.id;
                             if (id === condition) {
                                 console.log(serialNo);
                                 return false
                             }
                         })
                         if (item.linkageVal[0].linkageArray) {
                             a(item.linkageVal[0].linkageArray)
                         }
                     })
                 }
                 if (index.linkageArray) {
                     a(index.linkageArray)
                 }
             })
         }
     },
     mounted() {
         bus.$on('click', id => {
             this.init(id)
         })
     }
 }
</script>

<style scoped>

</style>
