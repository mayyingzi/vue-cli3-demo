// 手写插件demo 具体参考 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
class MyAwesomeWebpackPlugin {
    // 定义 `apply` 方法
    apply (compiler) {
        // tapAsync() 基于回调(callback-based)
        compiler.hooks.emit.tapAsync('HelloAsyncPlugin', function (compilation, callback) {
            setTimeout(function () {
                console.log('Done with async work...')
                callback()
            }, 1000)
        })
    }
}

// 设置样式中的px转为rem，TODO:border、border-radius不能不会转换
// var Px2remWebpackPlugin = require('px2rem-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    baseUrl: './', // 部署包时的基本url， 也可以根据环境判断设置 process.env.NODE_ENV === 'production'? '/production-sub-path/' : '/'
    outputDir: 'dist', // 当运行vue -cli-service build 时生成的生产换进构建文件的目录， 默认 dist
    // assetsDir: 'static', // 防止生成的静态资源（js、css、img、fonts）的（相对于outputDir）目录
    indexPath: 'index.html', // 指定生成的index.html的输出路径（相对于outputDir）。也是一个绝对路径，默认：index.html
    productionSourceMap: false, // 是否在生产环境下使用source map，默认： true
    // 函数配置
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 为生产环境配置
    //         console.log('生产环境-----')
    //     } else {
    //         // 为开发环境配置
    //         console.log('开发环境----')
    //     }
    // }
    // 对象配置
    configureWebpack: {
        resolve: {
            alias: {
                // 'vue-ios-pickers': 'vue-ios-pickers/src/index.js'
            }
        },
        plugins: [
            new MyAwesomeWebpackPlugin()
            // new Px2remWebpackPlugin({originScreenWidth: 750, maxWidth: 750}),
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true, // console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] // 移除console
                        }
                    }
                })
            ]
        }
    }

}
