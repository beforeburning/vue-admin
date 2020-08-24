<template>
    <div class="permissionsBox">
        <el-row class="btn">
            <el-input placeholder="请输入内容搜索当前页" v-model="search" @input="searchBtn" class="input-with-select">
                <el-select class="searchSelect" v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="id" value="id"></el-option>
                    <el-option label="姓名" value="name"></el-option>
                    <el-option label="职位" value="position"></el-option>
                    <el-option label="权限" value="permissions"></el-option>
                    <el-option label="联系方式" value="phone"></el-option>
                    <el-option label="邮箱" value="eMail"></el-option>
                    <el-option label="状态" value="state"></el-option>
                </el-select>
            </el-input>
            <el-button type="primary" @click="searchBtn">搜索</el-button>
            <el-button type="warning" @click="resetBtn">重置</el-button>
        </el-row>

        <el-table class="table" :data="search ? searchData : tableData" max-height="9999" height="0" border
                  style="width: 100%">

            <el-table-column prop="id" label="id" min-width="10%" align="center"></el-table-column>

            <el-table-column prop="name" label="姓名" min-width="15%" align="center"></el-table-column>

            <el-table-column prop="position" label="职位" min-width="15%" align="center"></el-table-column>

            <el-table-column prop="permissions" label="权限" min-width="15%" align="center"></el-table-column>

            <el-table-column prop="phone" label="联系方式" min-width="18%" align="center"></el-table-column>

            <el-table-column prop="eMail" label="邮箱" min-width="18%" align="center"></el-table-column>

            <el-table-column label="状态" min-width="10%" align="center">
                <template scope="scope">
                  {{ scope.row.state  | state }}
                </template>
            </el-table-column>

            <el-table-column label="操作" align="center" min-width="15%">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="detailed(scope.$index, scope.row)">详情</el-button>
                    <el-button size="mini" type="warning" @click="operation(scope.$index, scope.row)">操作</el-button>
                </template>
            </el-table-column>

        </el-table>

        <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page="pagination.currentPage" :page-sizes="[20, 30, 40, 50]"
                           :page-size="pagination.size" layout="total, sizes, prev, pager, next, jumper" :total="count">
            </el-pagination>
        </div>

        <component :is="compName" :row="row" :permissions="permissions"></component>
    </div>
</template>

<script>
    import { getUserList, getPermissionsList } from '@/api/management';
    import detailed from './components/userDetailed';
    import operation from './components/userOperation';

    export default {
        name: "permissions",
        components: {
            detailed,
            operation
        },
        data() {
            return {
                compName: '',
                row: {},
                // 列表数据
                tableData: [],
                // 搜索数据
                searchData: [],
                // 总数
                count: 0,
                // 分页
                pagination: {
                    currentPage: 1,
                    size: 20
                },
                permissions: [],
                // 搜索
                search: '',
                select: 'name',
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            // 搜索按钮
            searchBtn() {
                if (this.search && this.select) {
                    this.searchData = this.tableData.filter(data => {
                        return data[this.select].toLowerCase().includes(this.search.toLowerCase())
                    })
                }
            },
            // 重置按钮
            resetBtn() {
                this.search = ''
                this.select = 'name'
            },
            // 详细
            detailed(index, row) {
                this.row = row;
                this.compName = 'detailed';
            },
            // 操作
            operation(index, row) {
                this.row = row;
                this.compName = 'operation';
            },
            // 修改每页的数量
            handleSizeChange(val) {
                this.pagination.size = val;
                this.pagination.currentPage = 1;
                this.listData();
            },
            // 翻页
            handleCurrentChange(val) {
                // 重置搜索
                this.resetBtn();
                this.pagination.currentPage = val;
                this.listData();
            },
            // 列表数据
            listData() {
                getUserList(this.pagination).then(res => {
                    this.tableData = res.data.list;
                    this.count = res.data.count;
                }).catch(() => {
                    console.log('请求失败');
                })
            },
            // 权限列表
            permissionsList() {
                getPermissionsList().then(res => {
                    if (res.state) {
                        this.permissions = res.data.list
                    }
                }).catch(() => {
                    console.log('请求失败');
                })
            },
            init() {
                this.listData();
                this.permissionsList();
            }
        }
    }
</script>

<style scoped lang="less">
    .permissionsBox {
        width: 98%;margin-left: 1%;display: flex;flex-direction: column;height: 100%;

        .btn {
            margin-bottom: 10px;display: flex;

            .el-input-group {
                width: 350px;margin-right: 10px;

                .searchSelect {
                    width: 100px;
                }
            }
        }

        .table {
            overflow-y: scroll;
        }

        .page {
            display: flex;height: 80px;width: 100%;justify-content: center;align-items: center;
        }
    }
</style>
