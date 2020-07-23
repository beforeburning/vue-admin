<template>
     <div class="notPermissions">
        <img class="img" v-lazy="img" alt="">
        <el-button type="text" class="button" @click="prevPage">返回上一页</el-button>
    </div>
</template>

<script>
export default {
    name: "notPermissions",
    data() {
        return {
            publicPath: process.env,
            img: require('@/assets/images/notPermissions.jpg')
        }
    },
    mounted() {
    },
    methods: {
        prevPage() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped lang="less">
    .notPermissions {
        display: flex;width: 100%;justify-content: center;align-items: center;flex-direction: column;

        .img {
            width: 810*0.8px;height: 706*0.8px;margin-top: 30px;
        }

        .button {
            background: #002140;color: white;width: 150px;height: 50px;font-size: 16px;margin-top: 30px;
        }
    }
</style>
