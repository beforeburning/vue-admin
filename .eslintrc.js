module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        // 关闭eslint 校验代码
        // "@vue/prettier"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}]
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
