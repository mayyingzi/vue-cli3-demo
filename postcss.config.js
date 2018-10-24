module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
            rootValue: 75, // 设计稿的1/10
            unitPrecision: 2, // 小数精确度
            propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
        }
    }
}
