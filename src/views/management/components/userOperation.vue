<template>
    <div>
        <el-dialog width="40%" title="用户操作" :visible.sync="dialogTableVisible" :modal-append-to-body='false'
                   @closed="closed">

            <el-form :model="permissionsForm" class="permissions-form" autocomplete="off" label-position="left"
                    label-width="100px">

                <el-form-item label="账户权限">
                    <el-select v-model="permissionsForm.permissions" placeholder="请选择账户权限">
                        <el-option v-for="item in permissions" :label="item.label" :value="item.name"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="账户状态">
                    <el-select v-model="permissionsForm.state" placeholder="请选择账户状态">
                         <el-option label="正常" value="1"></el-option>
                         <el-option label="禁用" value="0"></el-option>
                    </el-select>
                </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
            <el-button @click="closed">取 消</el-button>
            <el-button type="primary" @click="save">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import { saveOperation } from '@/api/management';

  export default {
      name: "operation",
      data() {
          return {
              dialogTableVisible: false,
              permissionsForm: {
                  state: '',
                  permissions: ''
              }
          }
      },
      props: {
          row: {
              type: Object,
              required: false,
          },
          permissions: {
              type: Array,
              required: false,
          },
      },
      mounted() {
          this.dialogTableVisible = true;
          this.permissionsForm.state = this.row.state;
          this.permissionsForm.permissions = this.row.permissions;
      },
      methods: {
          closed() {
              this.$parent.row = {};
              this.$parent.compName = '';
          },
          save() {
              saveOperation(this.permissionsForm).then(res => {
                  if (res.state) {
                      this.$message.success(res.message)
                      this.closed();
                  }
              }).catch(() => {
                  console.log('保存失败');
              })
          }
      }
  }
</script>

<style lang="less">
  .permissions-form {
      .el-select {
          width: 100%;
      }
  }
</style>
