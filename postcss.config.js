// module.exports = {
//     plugins: {
//         autoprefixer: {
//             browsers: ['Android >= 4.0', 'iOS >= 7']
//         },
//         'postcss-pxtorem': {
//             rootValue: 37.5, // 设计稿的1/10
//             unitPrecision: 2, // 小数精确度
//             propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
//         }
//     }
// }

const AutoPrefixer = require('autoprefixer')
const px2rem = require('postcss-pxtorem')
module.exports = ({ file }) => {
    let remUnit
    // 判断条件 对vant ui 引入使用 375px设计稿，本app UI自身使用750
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        remUnit = 37.5
    } else {
        remUnit = 75
    }
    return {
        plugins: [
            px2rem({
                // remUnit: remUnit,
                rootValue: remUnit, // 设计稿的1/10
                unitPrecision: 2, // 小数精确度
                propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
            }),
            AutoPrefixer({
                browsers: ['last 20 versions', 'android >= 4.0']
            })
        ]
    }
}
