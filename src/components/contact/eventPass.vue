<template>
    <div class="eventPass">
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

</style>
