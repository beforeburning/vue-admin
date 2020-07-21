<template>
    <div class="loginRecord">
        <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" :modal="false" @closed="closed" top='5vh'
                   class="dialog">

            <div class="modify">
                <el-table :data="tableData" height="100%">
                    <el-table-column fixed prop="date" label="日期" min-width="10%"></el-table-column>
                    <el-table-column prop="equipment" label="设备" min-width="10%"></el-table-column>
                    <el-table-column prop="system" label="系统" min-width="10%"></el-table-column>
                    <el-table-column prop="way" label="登录方式" min-width="10%"></el-table-column>
                    <el-table-column prop="ip" label="IP" min-width="10%"></el-table-column>
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
     import { recordLog } from '@/api/user';

     export default {
         name: "loginRecord",
         data() {
             return {
                 title: '登录记录',
                 width: '90%',
                 //模态框是否显示
                 dialogVisible: false,
                 tableData: []
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
                 recordLog({}).then(res => {
                     if (res.state) {
                         this.tableData = res.data;
                     }
                 }).catch(() => {
                     console.log('请求失败');
                 })
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
                display: flex;justify-content: flex-end;
            }
        }
    }
</style>
<style scoped lang="less">
.modify {
    width: 100%;
}
</style>
