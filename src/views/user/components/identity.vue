<template>
    <div class="identity">
        <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" :modal-append-to-body='false'
                   @closed="closed" top='15vh' class="dialog">

            <div class="authorized" v-if="isIdentity">
                <div class="information">
                    <span>
                        <strong>姓名：</strong>
                        <em>{{information.name}}</em>
                    </span>
                    <span>
                        <strong>身份证：</strong>
                        <em>{{information.idCard}}</em>
                    </span>
                </div>
                <div class="title">
                    <p>* 您已经认证过身份信息  认证后不可更改</p>
                </div>
            </div>

            <div class="unauthorized" v-else>

                <el-form ref="identityRules" :model="identityForm" :rules="identityRules" class="identity-form"
                         autocomplete="off" label-width="100px" label-position="left">

                    <el-form-item prop="name" label="姓名">
                        <el-input key="name" ref="name" v-model="identityForm.name" type="text" placeholder="请输入您的姓名"
                                  name="name" tabindex="2" autocomplete="off"
                        ></el-input>
                    </el-form-item>

                    <el-form-item prop="idCard" label="身份证号">
                        <el-input key="idCard" ref="idCard" v-model="identityForm.idCard" type="text" maxlength="18"
                                  placeholder="请输入您的身份证号" name="idCard" tabindex="2" autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <div class="title">
                        <p>* 请确认您输入的身份证信息正确  认证成功后不可更改</p>
                    </div>
                </el-form>

            </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="cancel">取 消</el-button>
              <el-button type="primary" @click="success">{{isIdentity === true ? '确 定' : '认 证'}}</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
      import { getIdentity, submitIdentity } from '@/api/user';
      import {
          validateRealName,
          validateIdCard
      } from '@/components/validate';

      export default {
          name: "identity",
          data() {
              return {
                  title: '身份认证',
                  width: '550px',
                  //模态框是否显示
                  dialogVisible: false,
                  isIdentity: false,
                  // 身份信息
                  information: {
                      name: '',
                      idCard: ''
                  },
                  // 表单
                  identityForm: {
                      name: '',
                      idCard: ''
                  },
                  identityRules: {
                      name: [{required: true, trigger: 'blur', validator: validateRealName}],
                      idCard: [{required: true, trigger: 'blur', validator: validateIdCard}],
                  },
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
                  if (this.isIdentity) {
                      this.dialogVisible = false;
                  } else {
                      this.$refs.identityRules.validate(valid => {
                          if (valid) {
                              // 请求接口 提交身份信息
                              submitIdentity(this.passwordModifyForm).then(res => {
                                  if (res.state) {
                                      this.dialogVisible = false;
                                  }
                              }).catch(() => {
                                  console.log('请求失败');
                              })
                          }
                      })
                  }
              },
              // 关闭动画回调
              closed() {
                  this.$parent.compName = '';
              },
              // 初始化
              init() {
                  getIdentity(this.passwordModifyForm).then(res => {
                      if (res.state) {
                          if (JSON.stringify(res.data) !== '{}') {
                              this.information = res.data;
                              this.isIdentity = true;
                          }
                      }
                  }).catch(() => {
                      console.log('请求失败');
                  })
              }
          }
      }
</script>

<style lang="less">
    .identity {
        .el-dialog__body {
            padding-top: 10px;padding-bottom: 20px;
        }
    }
</style>
<style scoped lang="less">
      .title {
          display: flex;width: 100%;justify-content: center;align-items: center;

          p {
              color: #F56C6C;margin-top: 10px;margin-bottom: 0;
          }
      }

      .authorized {
          display: flex;flex-direction: column;width: 100%;

          .information {
              display: flex;width: 100%;flex-direction: column;

              span {
                  display: flex;width: 100%;height: 50px;align-items: center;

                  strong {
                      margin-left: 50px;font-weight: normal;
                  }

                  em {
                      font-style: normal;
                  }
              }
          }
      }

      .unauthorized {
          .identity-form {
              .el-form-item {
                  margin-top: 30px;
              }
          }
      }
</style>
