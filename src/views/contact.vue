<template>
    <div class="contact">
        <h1>{{pageTit}}</h1>
        <div class="item-box">
            <p>1、子组件 → 父组件</p>
            <p>总数： {{childtopSetAll}}</p>
            <child-totop @increase="childtotopAll" @reduce="childtotopAll"></child-totop>
        </div>
        <div class="item-box">
            <p>2、子组件 → 父组件 （V-model）</p>
            <p>总数： {{vall}}</p>
            <vmodel-totop v-model="vall"></vmodel-totop>
            <!-- 使用自定义事件
                <vmodel-totop @input="vsetAll"></vmodel-totop>
            -->
        </div>

        <div class="item-box">
            <p>3、使用v-model实现父子组建数据双向绑定</p>
            <p>总数：{{formnum}}</p>
            <form-bind v-model="formnum"></form-bind>
            <van-button type="warning" @click="topIncrease">+1</van-button>
            <p class="txt-left">一个具有双向绑定的v-model组件具备以下特征：</p>
            <p class="txt-left">1.子组件使用props接收父组件的 value</p>
            <p class="txt-left">2.子组件拥有可以更细value的HTML元素，当更新value时，出发input事件。事件内部使用$emit将新的value值传回给父组件</p>
        </div>
        <div class="item-box">
            <p>3、非父子组建</p>
            <div class="item-box">
                <p>3.1 中央时间总线</p>
                <p>监听其他组建传递信息： {{fromEven}}</p>
                <event-pass></event-pass>
            </div>

        </div>
    </div>
</template>
<script>
import { Button } from 'vant'
import { eventBus, eventConstains } from '../utils/eventBus.js'

export default {
    name: 'contact',
    components: {
        [Button.name]: Button,
        ChildTotop: () => import('../components/contact/childTotop.vue'),
        VmodelTotop: () => import('../components/contact/vmodelTotop.vue'),
        FormBind: () => import('../components/contact/formBind.vue'),
        EventPass: () => import('../components/contact/eventPass.vue')
    },
    data () {
        return {
            pageTit: '组件之间通信汇总',
            childtopSetAll: 0,
            vall: 0,
            formnum: 1,
            fromEven: ''
        }
    },
    mounted () {
        eventBus.$on(eventConstains.onMessage, (message) => {
            this.fromEven = message
        })
    },
    methods: {
        childtotopAll (all) {
            this.childtopSetAll = all
        },
        // 使用自定义事件
        vsetAll (all) {
            this.vall = all
        },
        topIncrease () {
            this.formnum++
        }
    }
}
</script>

<style lang='stylus' scoped>
.item-box
    padding 20px
.txt-left
    text-align left
</style>
