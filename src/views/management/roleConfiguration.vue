<template>
  <div class="permissionsConfigureBox">

      <el-row class="btn">
          <el-button type="primary">添加角色</el-button>
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
              </template>
        </el-table-column>
      </el-table>

  </div>
</template>

<script>
  import { getPermissionsList } from '@/api/management';

  export default {
      name: "permissionsConfigure",
      data() {
          return {
              permissions: []
          }
      },
      mounted() {
          this.init()
      },
      methods: {
          // 操作
          modify(index, row) {
              console.log(index, row);
              // this.row = row;
              // this.compName = 'operation';
          },
          // 权限列表
          permissionsList() {
              getPermissionsList().then(res => {
                  if (res.state) {
                      this.permissions = res.data.list;
                      console.log(this.permissions);
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
