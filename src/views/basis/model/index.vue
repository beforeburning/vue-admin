<template>
    <div class="content">
        <div class="br">
            <el-button @click="add">增加</el-button>
            {{from.num}}
        </div>
        <div class="br">
            <el-button @click="reduce">减少</el-button>
            {{from.num}}
        </div>
        <div class="br">
            <el-button @click="reset">重置</el-button>
            {{from.num}}
        </div>
        <div class="br">
            <label>
                <input type="text" v-model="from.num">
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "model",
    data() {
        console.log('再次进入页面的时候 并不会执行到data');
        return {
            from: {
                num: 1
            },
        }
    },
    mounted() {
    },
    methods: {
        add() {
            this.from.num++
        },
        reduce() {
            this.from.num--
        },
        reset() {
            this.$data.from = this.$options.data().from
        }
    }
}
</script>

<style scoped lang="less">
    .content {
        display: flex;flex-direction: column;

        .br {
            width: 100%;margin-top: 10px
        }
    }
</style>
