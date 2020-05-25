<template>
  <div id="app">

    <!--    <keep-alive>-->
    <router-view></router-view>
      <!--    </keep-alive>-->

    <div v-wechat-title="$route.meta.title"></div>
    <vue-ins-progress-bar></vue-ins-progress-bar>
  </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {}
        },
        mounted() {
            // 彩虹进度条
            this.$insProgress.finish();
        },
        created() {
            // 彩虹进度条
            this.$insProgress.start();
            this.$router.beforeEach((to, from, next) => {
                this.$insProgress.start();
                next();
            });
            this.$router.afterEach(() => {
                this.$insProgress.finish();
            });
        }
    };
</script>

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;
    }

    // fix css style bug in open el-dialog
    .el-popup-parent--hidden {
        .fixed-header {
            padding-right: 15px;
        }
    }
</style>
