<template>
    <div class="vmodelTotop">
        <p>使用v-model方式直接绑定父元素变量，把数据从子组件传回父组件</p>
        <van-button type="warning" @click="add">+1</van-button>
    </div>
</template>

<script>
import { Button } from 'vant'

export default {
    name: 'vmodelTotop',
    data () {
        return {
            counter: 0
        }
    },
    components: {
        [Button.name]: Button
    },
    methods: {
        add () {
            this.counter++
            this.$emit('input', this.counter)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
