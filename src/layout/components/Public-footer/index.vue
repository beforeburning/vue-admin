<template>
    <div class="PublicNav">
        <p>这是公共底部</p>
    </div>
</template>

<script>
export default {
    name: "PublicNav",
    data() {
        return {}
    },
    mounted() {
    },
    methods: {}
}
</script>

<style scoped lang="less">
    .PublicNav {
        display: flex;justify-content: center;align-items: center;

        p {
            margin: 0;padding: 0;
        }
    }
</style>
