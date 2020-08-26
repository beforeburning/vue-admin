<template>
  <div class="permissionsConfigureBox">

      <el-row class="btn">
          <el-button type="primary" @click="roleAdd">角色添加</el-button>
      </el-row>

      <el-table :data="permissions" style="width: 100%">
          <el-table-column prop="id" label="id" align="center" min-width="10%"></el-table-column>
          <el-table-column prop="label" label="权限" min-width="15%"></el-table-column>
          <el-table-column prop="name" label="key" min-width="15%"></el-table-column>
          <el-table-column label="添加时间" min-width="15%">
              <template scope="scope">
                  {{ scope.row.addTime | formatDate }}
              </template>
          </el-table-column>
          <el-table-column label="操作" align="center" min-width="15%">
              <template slot-scope="scope">
                  <el-button size="mini" type="warning" @click="modify(scope.$index, scope.row)">修改</el-button>
                  <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
              </template>
        </el-table-column>
      </el-table>

       <component :is="compName" :row="row" :index="index"></component>
  </div>
</template>

<script>
  import { getPermissionsList, delRole } from '@/api/management';
  import roleOperation from './components/roleOperation';

  export default {
      name: "permissionsConfigure",
      components: {
          roleOperation
      },
      data() {
          return {
              compName: '',
              row: {},
              permissions: [],
              index: ''
          }
      },
      mounted() {
          this.init()
      },
      methods: {
          // 操作
          modify(index, row) {
              this.row = row;
              this.index = index;
              this.compName = 'roleOperation';
          },
          // 删除
          del(index, row) {
              this.$confirm('此操作将永久删除角色, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              }).then(() => {
                  delRole({id: row.id}).then(res => {
                      if (res.state) {
                          this.$message.success(res.message);
                          this.permissions.splice(index, 1);
                      }
                  })
              }).catch(() => {
              });
          },
          // 添加角色
          roleAdd() {
              this.compName = 'roleOperation';
          },
          // 权限列表
          permissionsList() {
              getPermissionsList().then(res => {
                  if (res.state) {
                      this.permissions = res.data.list;
                  }
              }).catch(() => {
                  console.log('请求失败');
              })
          },
          init() {
              this.permissionsList();
          }
      }
  }
</script>

<style scoped lang="less">
  .permissionsConfigureBox {
      width: 98%;margin-left: 1%;display: flex;flex-direction: column;margin-bottom: 10px;flex: 1;

      .btn {
          display: flex;width: 100%;margin-bottom: 10px;
      }

      .table {
          overflow-y: scroll;
      }
  }
</style>
