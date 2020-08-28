<template>
    <div class="dicomContent" v-loading="loading" element-loading-text="拼命加载中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">

        <div>
            111
        </div>

    </div>
</template>

<script>
    import { dicomContent } from '@/api/dicom';

    export default {
        name: "dicomContent",
        data() {
            return {
                loading: true,
            }
        },
        activated() {
            this.init()
        },
        methods: {
            init() {
                dicomContent({id: this.$route.params.pathMatch}).then(res => {
                    // 未找到数据
                    if (!res.state) {
                        this.$router.push({name: 'dicom'})
                        return false;
                    }
                    console.log(res.data);
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .dicomContent {
        display: flex; width: 98%;margin-left: 1%;height: 99%;background: white;
    }
</style>
