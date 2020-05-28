<!-- 个人中心 -->
<template>
    <div class="personal">

        <el-form ref="rulesForm" :model="rulesForm" autocomplete="on" label-width="100px" class="rulesForm"
                 label-position="left" :rules="rules">

            <!--基础信息-->
            <div class="btn">
                <el-button type="primary" :icon="isEditor ? 'el-icon-edit' : 'el-icon-check'" class="editor"
                           @click="editor">{{isEditor ? '编辑' : '保存'}}</el-button>
            </div>

            <el-form-item class="id" label="账号ID：" prop="id">
              <el-input v-model="rulesForm.id" disabled="disabled"></el-input>
            </el-form-item>

            <el-form-item class="name" label="账号昵称：" prop="name">
              <el-input v-model="rulesForm.name" :disabled="isEditor" placeholder="请输入您的账号昵称" ref="name"
                        name="name"></el-input>
            </el-form-item>

            <el-form-item class="eMail" label="邮箱：" prop="eMail">
              <el-input v-model="rulesForm.eMail" :disabled="isEditor" placeholder="请输入您的邮箱" ref="eMail"
                        name="eMail"></el-input>
            </el-form-item>

            <el-form-item class="qq" label="QQ：" prop="qq">
              <el-input v-model.number="rulesForm.qq" :disabled="isEditor" placeholder="请输入您的QQ账号" ref="qq"
                        name="qq"></el-input>
            </el-form-item>

            <el-form-item class="weChat" label="weChat：" prop="weChat">
              <el-input v-model.number="rulesForm.weChat" :disabled="isEditor" placeholder="请输入您的微信账号" ref="weChat"
                        name="weChat"></el-input>
            </el-form-item>

            <el-form-item class="phone" label="手机：" prop="phone">
              <el-input maxlength="11" v-model.number="rulesForm.phone" :disabled="isEditor"
                        placeholder="请输入您的手机号" ref="phone" name="phone"></el-input>
            </el-form-item>

            <el-form-item class="age" label="年龄：" prop="age">
                <el-input maxlength="2" v-model.number="rulesForm.age" :disabled="isEditor" placeholder="请输入您的年龄"
                          ref="age" name="age">
                    <template slot="append">岁</template>
                </el-input>
            </el-form-item>

            <el-form-item class="introduction" label="个人简介：" prop="introduction">
               <el-input type="textarea" v-model="rulesForm.introduction" :disabled="isEditor"
                         :autosize="{ minRows: 3 }"
                         placeholder="简单的介绍一下自己吧~" ref="introduction" name="introduction"></el-input>
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
                rulesForm: {
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
                // this.isEditor = !this.isEditor;

                // 验证表单内容格式正确
                this.$refs.rulesForm.validate(valid => {
                    console.log(valid);
                    // if (valid) {
                    //
                    // } else {
                    //
                    // }
                })

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

        .rulesForm {
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
