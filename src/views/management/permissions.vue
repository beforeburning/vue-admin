<template>
    <div class="permissionsBox">

        <el-table class="table" :data="tableData" max-height="9999" height="0" border style="width: 100%">

            <el-table-column prop="date" label="日期" width="180"></el-table-column>

            <el-table-column prop="name" label="姓名" width="180"></el-table-column>

            <el-table-column prop="address" label="地址"></el-table-column>

        </el-table>

        <div class="page">
            111
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
                count: 0
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            init() {
                getUserList({}).then(res => {
                    if (res.state) {
                        this.tableData = res.data.list;
                        console.log(res.data.list[0]);
                        this.count = res.data.count
                    }
                }).catch(() => {
                    console.log('请求失败');
                })
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
            display: flex;height: 80px;width: 100%;
        }
    }
</style>
