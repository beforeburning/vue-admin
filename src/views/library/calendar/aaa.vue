<template>
    <div>
        <div style="margin-top: 10px">
           <p @click="childrenClick(data.condition[0].id)"> {{ data.condition[0].content }}</p>
        </div>

        <div v-if="data.linkageVal">

            <p>{{ data.linkageVal[0].questionContent }}</p>

            <div v-for="child in  data.linkageVal[0].optionArray" @click="childrenClick(child.id)" :key="child">
                {{ child.content }}
            </div>

            <aaa v-for="(item, index) in data.linkageVal[0].linkageArray" :key="index" :data="item"></aaa>
        </div>

    </div>
</template>

<script>
import bus from './bus'

export default {
    name: 'aaa',
    props: {
        data: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    data() {
        return {}
    },
    mounted() {
    },
    methods: {
        childrenClick(id) {
            bus.$emit('click', id);
        }
    }
}
</script>

<style scoped>

</style>
