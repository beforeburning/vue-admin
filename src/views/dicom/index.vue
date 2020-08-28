<template>
    <div class="dicom">
        <div class="dicomList">
            <el-table :data="tableData" height="100%">
                <el-table-column fixed prop="name" label="患者姓名"></el-table-column>
                <el-table-column prop="id" label="患者ID"></el-table-column>
                <el-table-column prop="date" label="日期"></el-table-column>
                <el-table-column prop="start" label="状态"></el-table-column>
                <el-table-column :show-overflow-tooltip="true" prop="description" label="描述"
                                 width='300'></el-table-column>
                <el-table-column prop="numImages" label="影像数"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="warning" @click="view(scope.row)">操作</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>


    </div>
</template>

<script>
import { dicomList } from '@/api/dicom';

export default {
    name: "index",
    data() {
        return {
            tableData: []
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        // 获取列表
        init() {
            dicomList().then(res => {
                if (res.state) {
                    this.tableData = res.data;
                }
            })
        },
        // 查看
        view(row) {
            this.$router.push({path: `dicomContent/${row.id}`});
        }
    }
}
</script>

<style lang="less">
    .dicomList {
        width: 98%;margin-left: 1%;height: 99%;

        .el-dialog {
            height: 100%;display: flex;flex-direction: column;

            .el-dialog__body {
                display: flex;flex: 1;overflow-y: scroll;padding: 0; margin: 30px 20px;
            }

            .el-dialog__footer {
                display: flex;justify-content: flex-end;
            }
        }
    }
</style>
<style scoped lang="less">
    .dicom {
        display: flex;flex-direction: column;width: 100%;height: 100%;
    }
</style>
