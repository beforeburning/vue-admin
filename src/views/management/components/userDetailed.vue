<template>
    <div>
        <el-dialog title="用户详情" :visible.sync="dialogTableVisible" :modal-append-to-body='false' @closed="closed">

            <el-row>
                <el-col :span="4">
                    <p class="name">id：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.id }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">姓名：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.name }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">邮箱：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.eMail }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">手机：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.phone }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">QQ：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.qq }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">微信：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.weChat }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">职位：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.position }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">状态：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.state === true ? '正常' : '禁用' }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">创建：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.createTime | formatDate(row.createTime) }}</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <p class="name">简介：</p>
                </el-col>
                <el-col :span="20">
                    <p class="val">{{ row.introduction }}</p>
                </el-col>
            </el-row>

        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "detailed",
    data() {
        return {
            dialogTableVisible: false,
        }
    },
    props: {
        row: {
            type: Object,
            required: false,
        }
    },
    mounted() {
        this.dialogTableVisible = true;
    },
    methods: {
        closed() {
            this.$parent.row = {};
            this.$parent.compName = '';
        }
    }
}
</script>

<style scoped lang="less">
    .name {
        text-align: right;font-size: 16px;margin-right: 20px;padding-top: 0; margin-top: 0;
    }

    .val {
        text-align: left;font-size: 16px;margin-left: 20px;padding-top: 0; margin-top: 0;
    }
</style>
