/**
 * @file 中央事件总线（使用空Vue创建实例）
 */
import Vue from 'vue'
const eventBus = new Vue()
const eventConstains = {
    onMessage: 'ONMESSAGE'
}
export {
    eventBus,
    eventConstains
}
