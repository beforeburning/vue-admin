<template>
    <div>
        <!-- Select Options-->
        <el-time-picker
            is-range
            v-model="value1"
            format='HH:mm'
            :picker-options="{
                step: '00:15',
            }"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
        </el-time-picker>

        <el-time-select
            v-model="value"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间">
        </el-time-select>

        <el-radio-group v-model="radio2">
            <el-radio :label="1">备选项</el-radio>
            <el-radio :label="2">备选项</el-radio>
            <el-radio :label="3">备选项</el-radio>
          </el-radio-group>

    </div>
</template>

<script>
    export default {
        name: "calendar",
        data() {
            return {
                radio2: 1,
                value: '',
                value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            }
        },
        methods: {},
        mounted() {
            var PI = "a";
            if (true) {
                console.log(PI);  // ReferenceError: PI is not defined
                const PI = "3.1415926";
            }
        }
    }
</script>

<style scoped>

</style>
