<template>
    <div>
        <el-button type="warning" @click="fooFun">fooFun</el-button>
        <el-button type="warning" @click="mixin">mixin内的方法</el-button>
    </div>
</template>

<script>
    import mixin from './mixin';

    export default {
        name: "mixin",
        mixins: [mixin],
        data() {
            return {
                message: 'goodbye',
                bar: 'def'
            }
        },
        mounted() {
            console.log(this.$data);
        },
        methods: {
            fooFun() {
                console.log('bar')
            },
        }
    }
</script>

<style scoped>

</style>
