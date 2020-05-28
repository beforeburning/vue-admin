<!-- 个人中心 -->
<template>
    <div class="personal">

        <el-form ref="ruleForm" label-width="100px" class="ruleForm" label-position="left" :rules="rules">

            <!--基础信息-->
            <div class="btn">
                <el-button type="primary" :icon="isEditor ? 'el-icon-edit' : 'el-icon-check'" class="editor"
                           @click="editor">{{isEditor ? '编辑' : '保存'}}</el-button>
            </div>

            <el-form-item class="id" label="账号ID：" prop="name">
              <el-input v-model="ruleForm.id" disabled="disabled"></el-input>
            </el-form-item>

            <el-form-item class="name" label="账号昵称：" prop="name">
              <el-input v-model="ruleForm.name" :disabled="isEditor" placeholder="请输入您的账号昵称"></el-input>
            </el-form-item>

            <el-form-item class="eMail" label="邮箱：" prop="name">
              <el-input v-model="ruleForm.eMail" :disabled="isEditor" placeholder="请输入您的邮箱"></el-input>
            </el-form-item>

            <el-form-item class="qq" label="QQ：" prop="name">
              <el-input v-model.number="ruleForm.qq" :disabled="isEditor" placeholder="请输入您的QQ账号"></el-input>
            </el-form-item>

            <el-form-item class="weChat" label="weChat：" prop="name">
              <el-input v-model.number="ruleForm.weChat" :disabled="isEditor" placeholder="请输入您的微信账号"></el-input>
            </el-form-item>

            <el-form-item class="phone" label="手机：" prop="name">
              <el-input maxlength="11" v-model.number="ruleForm.phone" :disabled="isEditor"
                        placeholder="请输入您的手机号"></el-input>
            </el-form-item>

            <el-form-item class="age" label="年龄：" prop="name">
                <el-input maxlength="2" v-model.number="ruleForm.age" :disabled="isEditor" placeholder="请输入您的年龄">
                    <template slot="append">岁</template>
                </el-input>
            </el-form-item>

            <el-form-item class="introduction" label="个人简介：" prop="name">
               <el-input type="textarea" v-model="ruleForm.introduction" :disabled="isEditor" :autosize="{ minRows: 3 }"
                         placeholder="简单的介绍一下自己吧~"></el-input>
            </el-form-item>

            <!--城市三级联动-->
            <div>
                1
            </div>

        </el-form>

    </div>
</template>

<script>
    import { login } from '@/api/user';

    export default {
        name: "personal",
        data() {
            return {
                isEditor: true,
                rules: {},
                ruleForm: {
                    id: '923398776',
                    name: 'Burning',
                    eMail: '923398776@qq.com',
                    qq: '923398776',
                    weChat: 'love923398776',
                    phone: '13000000000',
                    age: '26',
                    introduction: '啦啦啦~'
                }
            }
        },
        mounted() {
        },
        methods: {
            editor() {
                if (!this.isEditor) {
                    this.save();
                } else {
                    this.isEditor = !this.isEditor;
                }
            },
            save() {
                this.isEditor = !this.isEditor;
            }
        }
    }
</script>
<style lang="less">
    // 修改disabled状态下文字颜色
    .personal {
        input[disabled], input:disabled, input.disabled,
        textarea[disabled], textarea:disabled, textarea.disabled {
            -webkit-text-fill-color: #333;
            opacity: 1;
        }
    }
</style>
<style scoped lang="less">
    .personal {
        display: flex;flex-direction: column;

        .ruleForm {
            display: flex;flex-direction: column;

            .id, .name, .eMail, .qq, .weChat, .phone, .age, .introduction {
                width: 600px;margin-left: 30px;
            }

            .btn {
                display: flex;width: 100%;margin-left: 30px;margin-bottom: 22px;margin-top: 12px;

                .editor {
                    width: 100px;
                }
            }
        }
    }
</style>
