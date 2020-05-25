<template>
    <div class="PublicNav">
<!--        <p>当前页面：</p><strong>{{title}}</strong>-->
        <el-page-header class="header" @back="goBack" :content="title"></el-page-header>
    </div>
</template>

<script>
export default {
    name: "PublicNav",
    data() {
        return {
            title: this.$route.meta.title
        }
    },
    // 监听路由变化
    watch: {
        $route(to, from) {
            this.getPath(to)
        }
    },
    methods: {
        getPath(to) {
            this.title = to.meta.title
        },
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less">
    .PublicNav {
        display: flex;background: white;height: 40px;align-items: center;

        .header {
            margin: 0;padding: 0;margin-left: 15px;font-size: 14px !important;display: flex;align-items: center;height: 40px;

            .el-page-header__left {
                display: flex;align-items: center;height: 40px;
            }

            .el-page-header__title {
                font-size: 14px !important;line-height: 18px !important;
            }

            .el-page-header__content {
                font-size: 14px !important;line-height: 18px !important;cursor: pointer;
            }
        }

    }
</style>
