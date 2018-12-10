<template>
  <div class="ChildTotop">
    <p class="in-txt">自定义事件：把数据从子组件传回给父组件，子组件通过$emit()来触发事件，而父组件通过$on() 来监听事件，即观察者模式</p>
    <van-button type="warning" class="fir-btn" @click="increase">+1</van-button>
    <van-button type="warning"  @click="reduce">-1</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
    name: 'ChildTotop',
    data () {
        return {
            counter: 0
        }
    },
    components: {
        [Button.name]: Button
    },
    methods: {
        increase () {
            this.counter++
            this.$emit('increase', this.counter)
        },
        reduce () {
            this.counter--
            this.$emit('reduce', this.counter)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.fir-btn
    margin-right 20px
</style>
