<template>
    <div class="permissionsBox">

        <el-table class="table" :data="tableData" max-height="9999" height="0" border style="width: 100%">

            <el-table-column prop="id" label="id" min-width="10%" align="center"></el-table-column>

            <el-table-column prop="name" label="姓名" min-width="15%" align="center"></el-table-column>

            <el-table-column prop="position" label="职位" min-width="15%" align="center"></el-table-column>

            <el-table-column prop="permissions" label="权限" min-width="15%" align="center"></el-table-column>

            <el-table-column prop="phone" label="联系方式" min-width="18%" align="center"></el-table-column>

            <el-table-column prop="eMail" label="邮箱" min-width="18%" align="center"></el-table-column>

            <el-table-column label="操作" align="center" min-width="15%">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="detailed(scope.$index, scope.row)">详细</el-button>
                    <el-button size="mini" type="warning" @click="operation(scope.$index, scope.row)">操作</el-button>
                </template>
            </el-table-column>

        </el-table>

        <div class="page">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.currentPage"
                :page-sizes="pagination.sizes"
                :page-size="pagination.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="count">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { getUserList } from '@/api/management';

    export default {
        name: "permissions",
        data() {
            return {
                tableData: [],
                count: 0,
                pagination: {
                    currentPage: 1,
                    sizes: [20, 30, 40, 50],
                    size: 20
                }
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            // 详细
            detailed(index, row) {
                console.log(index, row);
            },
            // 操作
            operation(index, row) {
                console.log(index, row);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            // 列表数据
            listData() {
                getUserList({}).then(res => {
                    if (res.state) {
                        this.tableData = res.data.list;
                        console.log(res.data.list[0]);
                        this.count = res.data.count
                    }
                }).catch(() => {
                    console.log('请求失败');
                })
            },
            init() {
                this.listData();
            }
        }
    }
</script>

<style scoped lang="less">
    .permissionsBox {
        width: 98%;margin-left: 1%;display: flex;flex-direction: column;height: 100%;

        .table {
            overflow-y: scroll;
        }

        .page {
            display: flex;height: 80px;width: 100%;justify-content: center;align-items: center;
        }
    }
</style>
