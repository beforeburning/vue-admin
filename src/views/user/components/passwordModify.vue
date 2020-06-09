<template>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        :width="width"
        :modal="false"
        @closed="closed"
    >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    name: "passwordModify",
    data() {
        return {
            title: '修改密码',
            width: '50%',
            //模态框是否显示
            dialogVisible: false,
        }
    },
    mounted() {
        // 直接设置为true 动画效果就没了
        this.dialogVisible = true;
    },
    methods: {
        handleClose: function () {
            this.dialogVisible = false;
        },
        // 取消
        cancel() {
            this.dialogVisible = false;
        },
        // 确定
        save() {
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
