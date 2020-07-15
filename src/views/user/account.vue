<!-- 个人中心 -->
<template>
    <div class="account">
        <div class="box">
            <!-- 修改密码 -->
            <el-tag @click="changeComp('passwordModify')">修改密码</el-tag>
        </div>

        <component v-bind:is="compName"></component>

    </div>
</template>

<script>
    // 修改密码组件
    import passwordModify from './components/passwordModify';

    export default {
        name: "account",
        // 注册组件
        components: {
            passwordModify,
        },
        data() {
            return {
                compName: ''
            }
        },
        mounted() {
        },
        methods: {
            changeComp(e) {
                this.compName = e
            },
        }
    }
</script>

<style scoped lang="less">
    .account {
        display: flex;flex-direction: column;

        .box {
            width: 500px;display: flex;margin-left: 50px;

            .el-tag {
                width: 200px;height: 40px;display: flex;justify-content: center;align-items: center;cursor: pointer;
            }
        }

        p {
            margin: 0;padding: 0;
        }
    }
</style>
