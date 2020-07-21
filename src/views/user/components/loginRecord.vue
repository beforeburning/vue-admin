<template>
    <div class="loginRecord">
        <el-dialog
            :title="title" :visible.sync="dialogVisible" :width="width" :modal="false" @closed="closed" top='5vh'
            class="dialog"
        >
            <div class="modify">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="100%">
                    <el-table-column
                        fixed
                        prop="date"
                        label="日期"
                        min-width="10%"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="province"
                        label="省份"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="市区"
                        min-width="10%">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址"
                        min-width="20%">
                    </el-table-column>
                    <el-table-column
                        prop="zip"
                        label="邮编"
                        min-width="10%">
                    </el-table-column>
                </el-table>
            </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="cancel">取 消</el-button>
              <el-button type="primary" @click="success">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
     import { loginRecord } from '@/api/user';

     export default {
         name: "loginRecord",
         data() {
             return {
                 title: '登录记录',
                 width: '90%',
                 //模态框是否显示
                 dialogVisible: false,
                 tableData: [
                     {
                         date: '2016-05-03',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-02',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-04',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-01',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-08',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-06',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-07',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-04',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-01',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-08',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-06',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-07',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-03',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-02',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-04',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-01',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-08',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-06',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-07',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-04',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-01',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-08',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-06',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                     {
                         date: '2016-05-07',
                         name: '王小虎',
                         province: '上海',
                         city: '普陀区',
                         address: '上海市普陀区金沙江路 1518 弄',
                         zip: 200333
                     },
                 ]
             }
         },
         mounted() {
             // 直接设置为true 动画效果就没了
             this.dialogVisible = true;
             this.init();
         },
         methods: {
             // 取消
             cancel() {
                 this.dialogVisible = false;
             },
             // 确定
             success() {
                 this.dialogVisible = false;
             },
             // 关闭动画回调
             closed() {
                 this.$parent.compName = '';
             },
             // 初始化
             init() {
                 // console.log(111);
             }
         }
     }
</script>

<style lang="less">
    .loginRecord {
        .el-dialog {
            height: 90%;display: flex;flex-direction: column;

            .el-dialog__body {
                display: flex;flex: 1;overflow-y: scroll;padding: 0; margin: 30px 20px;

            }

            .el-dialog__footer {
                display: flex;
            }
        }
    }
</style>
<style scoped lang="less">
.modify {
    width: 100%;
}
</style>
