<template>
    <div class="notFound">
        <img class="img" v-lazy="img" alt="">
        <el-button type="text" class="button">回到首页</el-button>
    </div>
</template>

<script>
export default {
    name: "notFound",
    data() {
        return {
            publicPath: process.env,
            img: require('@/assets/images/notFound.png')
        }
    },
    mounted() {
    },
    methods: {}
}
</script>

<style scoped lang="less">
    .notFound {
        display: flex;width: 100%;justify-content: center;align-items: center;flex-direction: column;

        .img {
            width: 810*0.8px;
            height: 706*0.8px;
        }

        .button {
            background: #002140;color: white;width: 150px;height: 50px;font-size: 16px;
        }
    }
</style>
