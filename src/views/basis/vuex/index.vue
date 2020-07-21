<template>
    <div>
        <el-button @click="add">增加</el-button>
        <label>
            <input type="number" v-model='num' />
        </label>
        <div>
            通过state获取值
            {{this.$store.state.num}}
        </div>
        <div>
            通过getters 获取值
            {{this.$store.getters.getNum}}
        </div>
    </div>
</template>

<script>
export default {
    name: "vuex",
    data() {
        return {
            num: 1
        }
    },
    mounted() {
    },
    methods: {
        add() {
            this.$store.dispatch('add', this.num);
        }
    }
}
</script>

<style scoped>

</style>
