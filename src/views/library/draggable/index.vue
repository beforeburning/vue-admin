<template>
    <div>
         <!-- 调用组件  -->
        <draggable element="ul" class="draggable" v-model="list">
          <li v-for="item in list" :key='item.id'>{{item.name}}</li>
        </draggable>

        <!--        &lt;!&ndash; 输出list数据 &ndash;&gt;-->
        {{list}}
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "draggableLibrary",
        components: {
            //调用组件
            draggable,
        },
        data() {
            return {
                list: [
                    {
                        id: 1,
                        name: 'a'
                    },
                    {
                        id: 2,
                        name: 'b'
                    },
                    {
                        id: 3,
                        name: 'c'
                    },
                    {
                        id: 4,
                        name: 'd'
                    },
                    {
                        id: 5,
                        name: 'e'
                    },
                    {
                        id: 6,
                        name: 'f'
                    },
                ]
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .draggable {
        li {
            list-style: none;border: 1px solid #ddd;border-bottom: none;height: 50px;display: flex;justify-content: center;align-items: center;
            background: #eee;

            &:last-child {
                border-bottom: 1px solid #ddd;
            }
        }
    }
</style>
