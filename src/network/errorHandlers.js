/**
 * @file：api接口错误统一处理
 * @author: zhuxy
 */

import { Toast } from 'vant'

const errorHandlers = {
    '106' () {

    },
    default (code, msg) {
        console.info(`unknown error:${msg}`)
        Toast(msg)
    }
}

export default errorHandlers
