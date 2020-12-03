<template>
  <div class="sidebar">
      <!-- logo -->
      <logo :collapse="isCollapse" v-if="showLogo" />

      <!-- 下拉菜单 -->
      <el-menu
          :collapse="isCollapse"
          class="el-menu-vertical"
          :default-active="defaultActive"
          background-color="#000c17"
          text-color="#fff"
          active-text-color="#ffff00"
          :unique-opened="true"
          @open="handleOpen"
          @close="handleClose"
          router
      >
          <SidebarItem v-for="(item, idx) in routes" :subroute="item" :barIdx="idx" :key="idx" />
      </el-menu>
  </div>
</template>

<script>
import Logo from './Logo';
import SidebarItem from './SidebarItem';

export default {
    name: "Sidebar",
    components: {Logo, SidebarItem},
    props: {
        collapse: {
            type: Boolean
        },
        routes: {
            type: Array
        }
    },
    data() {
        return {
            showLogo: true,
            isCollapse: false
        }
    },
    computed: {
        // 首次进入页面时展开当前页面所属的菜单
        defaultActive() {
            return this.$route.path;
        },
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath)
        }
    },
}
</script>

<style lang="less" scoped>
    .sidebar {
        display: block;
        overflow: hidden;
        min-width: 64px !important;

        .el-menu-vertical:not(.el-menu--collapse) {
            width: 100% !important;
        }

        .el-menu-vertical {
            position: absolute;height: calc(100% - 50px);top: 50px;overflow-y: scroll;width: 100% !important;min-width: 64px !important;

            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */

            &::-webkit-scrollbar {
                display: none; /* Chrome Safari */
            }
        }

        .is-active {
            background: #1890ff !important;
        }
    }

</style>
