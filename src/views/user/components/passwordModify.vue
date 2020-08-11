<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" :modal-append-to-body='false'
               @closed="closed">
        <div class="modify">

            <el-form ref="passWordRules" :model="passwordModifyForm" :rules="passWordRules" class="password-form"
                     autocomplete="off" label-position="left" label-width="70px">

                <el-form-item prop="password" label="旧密码">
                    <el-input key="password" ref="password" v-model="passwordModifyForm.password" type="password"
                              placeholder="请输入您的旧密码" name="password" tabindex="2" autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item prop="password" label="新密码">
                    <el-input key="password" ref="password" v-model="passwordModifyForm.newPassword" type="password"
                              placeholder="请输入您的旧密码" name="password" tabindex="2" autocomplete="off"
                    ></el-input>
                </el-form-item>

                <el-form-item prop="newPasswordAgain" label="新密码">
                    <el-input key="password" ref="password" v-model="passwordModifyForm.newPasswordAgain"
                              type="password" placeholder="请输入您的旧密码" name="password" tabindex="2" autocomplete="off"
                    ></el-input>
                </el-form-item>

            </el-form>

        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="save">修 改</el-button>
        </span>
  </el-dialog>
</template>

<script>
     import { passwordModify } from '@/api/user';
     import {
       validatePassword
     } from '@/components/validate';
     import { aes } from "@/utils/crypto";

     export default {
       name: "passwordModify",
       data() {
         const newPasswordAgain = (rule, value, callback) => {
           if (value.length < 6 || value.length > 12) {
             callback(new Error('密码长度6到12位'))
           } else if (value !== this.passwordModifyForm.newPassword) {
             callback(new Error('两次输入的密码不一致'))
           } else {
             callback()
           }
         };
         return {
           title: '修改密码',
           width: '550px',
           //模态框是否显示
           dialogVisible: false,
           // 修改密码表单
           passwordModifyForm: {
             password: '',
             newPassword: '',
             newPasswordAgain: ''
           },
           isRemember: true,
           passWordRules: {
             password: [{required: true, trigger: 'blur', validator: validatePassword}],
             newPasswordAgain: [{required: true, trigger: 'blur', validator: newPasswordAgain}],
           },
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
         save() {
           this.$refs.passWordRules.validate(valid => {
             if (valid) {
               // 加密
               let str = {
                 password: aes.aesEncrypt(this.passwordModifyForm.password),
                 newPassword: aes.aesEncrypt(this.passwordModifyForm.newPassword),
                 newPasswordAgain: aes.aesEncrypt(this.passwordModifyForm.newPasswordAgain)
               }
               // 请求接口 修改密码
               passwordModify(str).then(res => {
                 if (res.state) {
                   this.dialogVisible = false;
                   this.$message.success(res.message);
                 }
               }).catch(() => {
                 console.log('请求失败');
               })
             }
           })
         },
         // 关闭动画回调
         closed() {
           this.$parent.compName = '';
         }
       }
     }
</script>

<style lang="less">
    .modify {
      .el-form-item__error {
        left: 30px !important;
      }
    }
</style>
<style scoped lang="less">
    @dark_gray: #889aa4;
    @light_gray: #eee;
    .modify {
      display: flex;

      .el-form-item {
        margin-top: 15px;
      }

      .password-form {
        display: flex;width: 100%;flex-direction: column;

        .svg-container {
          color: @dark_gray;vertical-align: middle;width: 30px;display: inline-block;text-align: center;float: left;margin-left: 15px;

          i {
            font-size: 20px;display: inline-block;margin-top: 14px;
          }
        }

        .el-input {
          display: inline-block;height: 47px;width: 85%;

          input {
            background: transparent;border: 0;-webkit-appearance: none;border-radius: 0;padding: 12px 5px 12px 0;color: #fff;height: 47px !important;caret-color: #fff;

            &:-webkit-autofill {
              box-shadow: 0 0 0 1000px #283443 inset !important;-webkit-text-fill-color: #fff !important;
            }
          }

        }
      }
    }
</style>
