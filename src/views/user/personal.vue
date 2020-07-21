<!-- 个人中心 -->
<template>
    <div class="account">
        <div class="box">
            <!-- 修改密码 -->
            <el-tag @click="changeComp('passwordModify')">修改密码</el-tag>

            <el-tag @click="changeComp('loginRecord')">登录记录</el-tag>

            <el-tag @click="changeComp('identity')">身份认证</el-tag>
        </div>

        <component v-bind:is="compName"></component>

    </div>
</template>

<script>
    // 修改密码组件
    import passwordModify from './components/passwordModify';
    import loginRecord from './components/loginRecord';
    import identity from './components/identity';

    export default {
        name: "account",
        // 注册组件
        components: {
            passwordModify,
            loginRecord,
            identity
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
            width: 500px;display: flex;margin-left: 30px;flex-direction: column;

            .el-tag {
                width: 200px;height: 40px;display: flex;justify-content: center;align-items: center;cursor: pointer;margin-top: 30px;
            }
        }

        p {
            margin: 0;padding: 0;
        }
    }
</style>
