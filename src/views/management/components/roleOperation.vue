<template>
     <div>
        <el-dialog :title="title" :visible.sync="dialogTableVisible" :modal-append-to-body='false' @closed="closed">

            <el-form ref="rulesForm" :rules="rules" :model="roleOperationForm" class="roleOperationForm"
                     autocomplete="off" label-position="left"
                     label-width="100px">

                 <el-form-item class="label" label="角色名称：" prop="label">
                    <el-input v-model.number="roleOperationForm.label" placeholder="请输入角色名称" ref="label"
                              name="label"></el-input>
                 </el-form-item>

                 <el-form-item class="name" label="key：" prop="name">
                    <el-input v-model.number="roleOperationForm.name" placeholder="请输入角色名称" ref="name"
                              name="name"></el-input>
                 </el-form-item>

                <p>权限选择</p>

                <el-tree
                    :data="permissionsTreeList"
                    show-checkbox
                    node-key="id"
                    ref="tree"
                    :default-checked-keys="roleOperationForm.permissionsTree"
                    :props="defaultProps">
                </el-tree>

            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="closed">取 消</el-button>
                <el-button type="primary" @click="save">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {
    roleName,
    roleKey
} from "@/components/validate";
import { permissionsTree } from '@/api/management';

export default {
    name: "roleOperation",
    data() {
        return {
            title: '',
            rules: {
                label: [{required: true, trigger: 'blur', validator: roleName}],
                name: [{required: true, trigger: 'blur', validator: roleKey}],
            },
            dialogTableVisible: false,
            roleOperationForm: {},
            // 权限树
            permissionsTreeList: [],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };

    },
    props: {
        row: {
            type: Object,
            required: false,
        },
        index: {
            required: false,
        }
    },
    mounted() {
        this.dialogTableVisible = true;
        if (JSON.stringify(this.row) === '{}') {
            this.title = '添加角色'
        } else {
            this.title = '角色详情'
            this.roleOperationForm = this.row;
            console.log(this.row);
        }

        // 获取权限树
        permissionsTree().then(res => {
            if (res.state) {
                this.permissionsTreeList = res.data.list;
            }
        })
    },
    methods: {
        closed() {
            this.$parent.row = {};
            this.$parent.index = '';
            this.$parent.compName = '';
        },
        save() {
            // 获取权限树的已选中的key
            let arr = this.$refs.tree.getCheckedKeys();
            console.log(arr);
        }
    }
}
</script>

<style scoped lang="less">
 .roleOperationForm {
     .el-select {
         width: 100%;
     }

     .el-tree-node__content {
         margin-bottom: 10px;
     }

     .el-tree {
         height: 300px;overflow-y: scroll;
     }
 }
</style>

<style lang="less">
 .roleOperationForm {
     .el-tree-node__content {
         margin-bottom: 5px;
     }

     .el-tree-node__label {
         margin-left: 5px;
     }
 }
</style>
