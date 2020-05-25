<template>
  <div class="app-wrapper">
      <!-- 侧边栏 -->
      <Sidebar ref="sidebar" :class="isCollapse ? 'sidebar close' : 'sidebar'" :routes="routes" />
      <div class="sidebarContent">
          <!-- 头部 -->
          <div class="header">
              <i @click="collapse"
                 :class="isCollapse ? 'collapseIcon el-icon-s-unfold' : 'collapseIcon el-icon-s-fold'" />
              <User class="user"></User>
          </div>
          <!-- 导航栏 -->
          <PublicNav class="PublicNav"></PublicNav>

          <app-main class="app-main" />

          <!-- 底部 -->
          <PublicFooter class="PublicFooter"></PublicFooter>
      </div>
  </div>
</template>

<script>
import { Sidebar, AppMain, User, PublicNav, PublicFooter } from './components';
import { mapState } from 'vuex';

export default {
    name: 'Layout',
    data() {
        return {
            routes: [],
            isCollapse: false
        }
    },
    components: {
        Sidebar,
        AppMain,
        User,
        PublicNav,
        PublicFooter
    },
    computed: {
        ...mapState({
            sidebar: state => state.app.sidebar,
        })


    },
    methods: {
        // 路由处理
        routesList() {
            let routes = this.$router.options.routes;
            return routes;
        },
        collapse() {
            let sidebar = this.$refs.sidebar;
            sidebar.isCollapse = !sidebar.isCollapse;
            this.isCollapse = sidebar.isCollapse;
        }
    },
    mounted() {
        // 如果没有token 直接跳转到登录页
        if (!this.$store.state.token) {
            this.$message.error('登录失效');
            this.$router.push({name: 'login'});
        }
        this.routes = this.routesList();
    }
}

</script>

<style lang="less" scoped>
    .app-wrapper {
        position: fixed;height: 100%;width: 100%;display: flex;left: 0;top: 0;

        .sidebar {
            display: flex;
            width: 200px;
            height: 100%;
            position: relative;
            min-width: 64px !important;
            transition: .3s;
            overflow: hidden;

            &.close {
                width: 64px;
                transition: .3s;
            }
        }

        /*.el-submenu {*/
        /*    min-width: 64px !important;*/
        /*}*/

        .sidebarContent {
            display: flex;flex: 1;flex-direction: column;background: #f0f2f5;height: 100%;

            .header {
                display: flex;height: 50px;background: white;width: 100%;justify-content: space-between;
                box-shadow: 0 1px 4px rgba(0, 21, 41, .08);position: relative;z-index: 2;

                .collapseIcon {
                    height: 50px;width: 50px;display: inline-flex;justify-content: center;align-items: center;font-size: 24px;
                    cursor: pointer;transition: .3s;

                    &:hover {
                        background: rgba(0, 0, 0, .025)
                    }

                }

                .user {
                    display: flex;
                }
            }

            .PublicNav {
                height: 40px;display: flex;line-height: 40px;
            }

            .app-main {
                margin-top: 10px;overflow-y: scroll;flex: 1;display: flex;
            }

            .PublicFooter {
                display: flex;height: 40px;
            }
        }
    }
</style>
