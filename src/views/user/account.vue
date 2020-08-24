<!-- 个人中心 -->
<template>
    <div class="personal">

        <el-form ref="rulesForm" :model="rulesForm" autocomplete="on" label-width="100px" class="rulesForm"
                 label-position="left" :rules="rules">

            <!--基础信息-->
            <div class="btn">

                <el-button v-show="!isEditor" type="warning" @click="cancel" slot="reference">取消</el-button>

                <el-button type="primary" :icon="isEditor ? 'el-icon-edit' : 'el-icon-check'" class="editor"
                           @click="editor">{{ isEditor ? '编辑' : '保存' }}</el-button>
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

            <el-form-item class="weChat" label="微信：" prop="weChat">
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

            <el-form-item class="cityBox" label="城市：">
                <!--城市三级联动-->
                <city ref="city" :disabled="isEditor" :province="rulesForm.province" :city="rulesForm.city"
                      :area="rulesForm.area"
                ></city>
            </el-form-item>

            <el-form-item class="introduction" label="个人简介：" prop="introduction">
                <el-input type="textarea" v-model="rulesForm.introduction" :disabled="isEditor"
                          :autosize="{ minRows: 3 }"
                          placeholder="简单的介绍一下自己吧~" ref="introduction" name="introduction"></el-input>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    import { getUserData, saveUserData } from '@/api/user';
    import city from '@/components/city';
    import {
        validateName,
        validateEMail,
        validateNumber,
        validateWeChat,
        validatePhone,
        validateAge
    } from '@/components/validate';

    export default {
        name: "personal",
        components: {
            city
        },
        data() {
            return {
                isEditor: true,
                rules: {
                    name: [{required: true, trigger: 'blur', validator: validateName}],
                    eMail: [{required: true, trigger: 'blur', validator: validateEMail}],
                    qq: [{required: true, trigger: 'blur', validator: validateNumber}],
                    weChat: [{required: true, trigger: 'blur', validator: validateWeChat}],
                    phone: [{required: true, trigger: 'blur', validator: validatePhone}],
                    age: [{required: true, trigger: 'blur', validator: validateAge}],
                },
                // 用户数据
                rulesForm: {},
                // 用来记录编辑前的数据
                rulesFormCancel: {}
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            // 编辑
            editor() {
                if (!this.isEditor) {
                    this.save();
                } else {
                    this.rulesFormCancel = {
                        ...this.rulesForm
                    };
                    this.isEditor = !this.isEditor;
                }
            },
            // 取消编辑
            cancel() {
                this.$confirm('您将失去所有已编辑内容?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.rulesForm = this.rulesFormCancel;
                    this.isEditor = !this.isEditor;
                }).catch(() => {
                });
            },
            // 保存编辑
            save() {
                // 验证表单内容格式正确
                this.$refs.rulesForm.validate(valid => {
                    if (valid) {
                        // 请求接口 保存编辑
                        let str = {
                            // 获取城市三级联动的数据
                            ...this.$refs.city.dataReturn(),
                            ...this.rulesForm
                        }
                        saveUserData(str).then(res => {
                            if (res.state) {
                                this.isEditor = !this.isEditor;
                                this.rulesFormCancel = {};
                                this.$message.success(res.message);
                            } else {
                                this.$router.push({name: 'login'});
                            }
                        }).catch(() => {
                            console.log('请求失败');
                        })
                    }
                })
            },
            // 获取用户数据
            getUserData() {
                getUserData().then(res => {
                    if (res.state) {
                        this.rulesForm = res.data
                    } else {
                        this.$router.push({name: 'login'})
                    }
                }).catch(() => {
                    console.log('请求失败');
                })
            },
            // 初始化
            init() {
                this.getUserData();
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

            .cityBox {
                margin-left: 30px;
            }

            .btn {
                display: flex;width: 100%;margin-left: 20px;margin-bottom: 22px;margin-top: 12px;

                .editor {
                    display: flex;margin-right: 10px;width: 90px;

                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
