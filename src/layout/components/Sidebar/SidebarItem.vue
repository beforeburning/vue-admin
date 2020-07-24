<template>
  <!-- 如果当前 subroute 有子节点 -->
    <el-submenu v-if="!subroute.hidden && subroute.children && subroute.children.length > 0 && permissions(subroute)"
                :index="genPath(fatherpath, subroute.path, subroute)">

        <template slot="title">
            <i :class="subroute.meta.icon"></i>
            <span>{{subroute.meta.title}}</span>
        </template>

        <!-- 递归调用自身，直到 subroute 不含子节点 -->
        <SidebarItem v-for="(submenu, subidx) in subroute.children"
                     :subroute="submenu"
                     :fatherpath="genPath(fatherpath, subroute.path, subroute)"
                     :barIdx="subidx"
                     :key="barIdx + '-' + subidx" />
    </el-submenu>

    <!-- 当前节点不含子节点且非隐藏 -->
    <el-menu-item
        v-else-if="!subroute.hidden && permissions(subroute)"
        :index="genPath(fatherpath, subroute.path, subroute)"
    >{{subroute.meta.title}}
    </el-menu-item>

    <el-menu-item
        v-else-if="!subroute.hidden && permissions(subroute)"
        :index="genPath(fatherpath, subroute.path, subroute)"
    >{{subroute.meta.title}}</el-menu-item>

</template>

<script>
// import store from "../../../store";

import store from "../../../store";

export default {
    name: 'SidebarItem',
    data() {
        return {}
    },
    props: {
        subroute: {
            type: Object
        },
        barIdx: {
            type: [String, Number]
        },
        fatherpath: {
            type: String
        }
    },
    methods: {
        // 生成侧边栏路由，格式: /a/b/c
        genPath(fatherpath, path, subroute) {
            return `${arguments[0] ? `${arguments[0]}/` : ''}${arguments[1]}`
        },
        // 权限判断
        permissions(subroute) {
            return !(subroute.meta.permissions && subroute.meta.permissions.indexOf(store.state.user.permissions) === -1);
        }
    },
}
</script>

<style lang="less">
   .el-submenu__title {
       transition: 0s !important;
   }

   .el-menu-item {
       transition: 0s !important;
   }

   .el-menu {
       border: 0 !important;
   }
</style>
