<template>
    <div class="eventPass">
        <p>任意组件之间通信，也可以使用eventBus实例扩展，为其添加 data， methods，computed等属性，作为公共属性，可以共用；所以在这里可以放置需要共享的信息，比如用户登录昵称等，使用只需要初始化一次bus既可以，所以在单页面客户端应用较广泛。</p>
        <p>项目较大，可以使用vuex状态管理</p>
        <van-button type="warning" @click="sendMessage">发送消息</van-button>
    </div>
</template>

<script>
import { Button } from 'vant'
import { eventBus, eventConstains } from '../../utils/eventBus.js'

export default {
    name: 'eventPass',
    components: {
        [Button.name]: Button
    },
    data () {
        return {

        }
    },
    methods: {
        sendMessage () {
            eventBus.$emit(eventConstains.onMessage, '来自于组建eventPass的消息' + Date.parse(new Date()))
        }
    }
}
</script>

<style lang="stylus" scoped>
p
    text-align left
</style>
