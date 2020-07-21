<template>
   <el-dialog
       :title="title" :visible.sync="dialogVisible" :width="width" :modal="false" @closed="closed"
   >
        <div class="modify">

            1111

        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="success">确 定</el-button>
        </span>
  </el-dialog>
</template>

<script>
export default {
    name: "loginRecord",
    data() {
        return {
            title: '登录记录',
            width: '550px',
            //模态框是否显示
            dialogVisible: false,
        }
    },
    mounted() {
        // 直接设置为true 动画效果就没了
        this.dialogVisible = true;
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
        }
    }
}
</script>

<style scoped>

</style>
