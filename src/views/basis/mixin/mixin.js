// 混入
const mixin = {
    cache: null,
    data: () => {
        return {
            message: 'hello',
            foo: 'abc',
            cache: null
        }
    },
    created: () => {
        console.log('混入对象的钩子被调用')
    },
    methods: {
        mixin() {
            console.log('mixin内的方法')
        },
        fooFun() {
            console.log('mixin内的方法')
        },
        // 可以拿来做埋点
        sendEnterPage() {
            this.cache = this.$route;
            console.log('enter page', this.cache.fullPath);
        },
        sendLeavePage() {
            console.log('leave page', this.cache.fullPath);
        }
    },
    mounted() {
        this.sendEnterPage()
    },
    deactivated() {
        this.sendLeavePage()
    }
};

export default mixin
