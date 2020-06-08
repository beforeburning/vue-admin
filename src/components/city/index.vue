<template>
    <div class="city">

        <el-select class="select" v-model="form.province" :disabled="disabled" placeholder="请选择省"
                   @change="handleChange('province')">
            <el-option v-for="item in provinceData" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>

        <el-select class="select" v-model="form.city" :disabled="disabled || form.province === 0" placeholder="请选择市"
                   @change="handleChange('city')">
            <el-option v-for="item in cityData" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>

        <el-select class="select" v-model="form.area" :disabled="disabled || form.province === 0 || form.city === 0"
                   placeholder="请选择区"
                   @change="handleChange('area')">
            <el-option v-for="item in areaData" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>

    </div>
</template>

<script>
    import { getProvinceData, getCityData, getAreaData } from '@/api/dictionary';

    export default {
        name: "city",
        props: {
            disabled: {
                type: Boolean,
                required: false,
            },
            province: {
                type: Number,
                required: false,
            },
            city: {
                type: Number,
                required: false,
            },
            area: {
                type: Number,
                required: false,
            },
        },
        watch: {
            area() {
                this.init()
            }
        },
        data() {
            const defaults = [{id: 0, name: '请选择'}];
            return {
                defaults: [{id: 0, name: '请选择'}],
                provinceData: [...defaults],
                cityData: [...defaults],
                areaData: [...defaults],
                form: {
                    province: 0,
                    city: 0,
                    area: 0
                }
            }
        },
        methods: {
            // 省数据
            getProvinceData() {
                getProvinceData().then(res => {
                    if (res.state) {
                        this.provinceData = [
                            ...this.defaults,
                            ...res.data
                        ];
                    }
                }).catch(() => {
                    this.$message.error('请求失败')
                })
            },
            // 市数据
            getCityData(id) {
                getCityData({id: id}).then(res => {
                    if (res.state) {
                        this.cityData = [
                            ...this.defaults,
                            ...res.data
                        ];
                    }
                }).catch(() => {
                    this.$message.error('请求失败')
                })
            },
            // 区数据
            getAreaData(id) {
                getAreaData({city: this.form.province, id: id}).then(res => {
                    if (res.state) {
                        this.areaData = [
                            ...this.defaults,
                            ...res.data
                        ];
                    }
                }).catch(() => {
                    this.$message.error('请求失败')
                })
            },
            // 数据修改 刷新下拉框
            handleChange(res) {
                if (res === 'province') {
                    this.form.city = 0;
                    this.form.area = 0;
                    this.areaData = [];
                    this.getCityData(this.form.province);
                }
                if (res === 'city') {
                    this.form.area = 0;
                    this.areaData = [];
                    this.getAreaData(this.form.city);
                }
            },
            // 返回城市数据
            dataReturn() {
                return this.form
            },
            init() {
                // 设置默认值
                this.form = {
                    province: this.province,
                    city: this.city,
                    area: this.area
                }
                this.getProvinceData();
                this.getCityData(this.form.province);
                this.getAreaData(this.form.city);
            }
        }
    }
</script>

<style scoped lang="less">
.city {
    display: flex;

    .select {
        margin-right: 15px;
    }
}
</style>
