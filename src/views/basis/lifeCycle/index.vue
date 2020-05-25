<template>
    <div id="container">
        <el-button @click="changeMsg">数据更新</el-button>
        <el-button @click="destroyed">销毁实例</el-button>
        <el-button @click="modify">销毁实例</el-button>
        <span ref='msg'>{{msg}}</span>
        <div class="br">
            <p>在数据双向绑定中 data 是在创建实例的时候生成的</p>
            <p>如果router-view被keep-alive包裹了 那么只会在页面的第一次加载 执行生命周期的创建实例</p>
            <p>这个时候 页面关闭后 实例会依然留在内存中 组件不会进入 生命周期的销毁阶段</p>
            <p>在组件中跳转 页面只会执行组件的 activated 激活组件 和 deactivated 停用组件</p>
            <p>所以 在路由切换的时候 如果遇到有每次进入页面都需要执行的方法 不能写在mounted里面 要写在activated里面</p>
        </div>
        <dl>
            <dt>我对生命周期理解</dt>
            <dd>beforeCreate --- 准备创建vue实例 --- 这个时候 vue还没有创建这个页面的vue实例</dd>
            <dd>created --- 创建完vue实例 --- vue实例已经创建好 可以开始将dom 解析到页面</dd>
            <dd>beforeMount --- 解析页面之前 --- vue开始解析html之前</dd>
            <dd>mounted --- 已经解析好html --- vue已经将template中的vue代码解析完毕 这个时候已经可以拿到dom元素了 可以执行方法了</dd>
            <dd>beforeUpdate --- 当实例中的数据修改 --- 某个方法 修改了vue中data值 vue会把这个修改更新到dom中 开始准备更新</dd>
            <dd>updated --- 数据已经被修改 --- vue已经将要修改的数据 修改完毕 *如果通过document方式修改 不会触发vue的更新操作</dd>
            <dd>activated --- 组件被激活 --- dom已经解析完毕后 激活组件 组件可以正常使用了</dd>
            <dd>deactivated --- 组件被停用 --- 组件被停止 这个时候组件的内容还在内存中</dd>
            <dd>beforeDestroy --- 组件销毁前 --- 页面关闭时 组件进入销毁阶段 销毁前</dd>
            <dd>destroyed --- 组件销毁后 --- 页面关闭时 组件进入销毁阶段 销毁结束后</dd>
        </dl>
        <img class="img" src="../../../assets/images/lifeCycle.png" alt="">
    </div>
</template>

<script>
export default {
    name: "lifeCycle",
    data() {
        return {
            msg: 'TigerChain'
        }
    },
    beforeCreate() {
        console.group("%c%s", "color:red", 'beforeCreate--实例创建前状态');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    created() {
        console.group("%c%s", "color:red", 'created--实例创建完成状态');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    beforeMount() {
        console.group("%c%s", "color:red", 'beforeMount--挂载之前的状态');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    mounted() {
        console.group("%c%s", "color:red", 'mounted--已经挂载的状态');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    beforeUpdate() {
        console.group("%c%s", "color:red", 'beforeUpdate--数据更新前的状态');
        console.log("%c%s", "color:blue", "el  :" + this.$el.innerHTML);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg);
        console.log("%c%s", "color:green", "真实的 DOM 结构:" + document.getElementById('container').innerHTML)
    },
    updated() {
        console.group("%c%s", "color:red", 'updated--数据更新完成时状态');
        console.log("%c%s", "color:blue", "el  :" + this.$el.innerHTML);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg);
        console.log("%c%s", "color:green", "真实的 DOM 结构:" + document.getElementById('container').innerHTML)
    },
    activated() {
        console.group("%c%s", "color:red", 'activated-- keep-alive 组件激活时调用');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    deactivated() {
        console.group("%c%s", "color:red", 'deactivated-- keep-alive 停用时调用');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    beforeDestroy() {
        console.group("%c%s", "color:red", 'beforeDestroy-- vue实例销毁前的状态');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    destroyed() {
        console.group("%c%s", "color:red", 'destroyed-- vue实例销毁完成时调用');
        console.log("%c%s", "color:blue", "el  :" + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:blue", "data  :" + this.$data);
        console.log("%c%s", "color:blue", "message  :" + this.msg)
    },
    methods: {
        changeMsg() {
            this.msg = 'TigerChain111'
        },
        destroyed() {
            this.$destroy()
        },
        modify() {
            this.$refs.msg.innerText = 111;
        }
    },
    created: () => {
        console.log('在dom加载前执行的方法')
    },
}
</script>

<style lang="less" scoped>
#container {
    img {
        width: 300px;
    }

    dl {
        margin-top: 30px;

        dd {
            margin-top: 5px;
        }
    }
}
</style>
