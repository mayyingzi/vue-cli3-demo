module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        // 自动转换为按需引入的方式, 且样式自动引入
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}
