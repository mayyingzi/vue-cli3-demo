<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{curTit}}</div>
    <div>{{addParams}}</div>
    <div class="top-picker">
        <vue-ios-pickers
            date="date"
            :cols="2"
            v-model="timeDate"
        ></vue-ios-pickers>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// vue-ios-pickers https://github.com/YuanWing/vue-ios-pickers/blob/master/index.html
import VueIosPickers from 'vue-ios-pickers/src/picker.vue'
// import VueIosPickers from 'vue-ios-pickers'

export default {
    name: 'home',
    components: {
        HelloWorld,
        VueIosPickers
    },
    data () {
        return {
            curTit: '初始化tit',
            addParams: '',
            timeDate: '',
            yearPicker: ''
        }
    },
    created () {
    },
    mounted () {
        // console.log(process.env)
        console.log(111)
        setTimeout(() => {
            this.curTit = '更新的tit'
            this.addParams = '今安徽的机会'
            this.$nextTick(() => {
                // console.log(this.$el)
            })
        }, 5000)

        this.getProm(1)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    methods: {
        getProm (str) {
            return new Promise((resolve, reject) => {
                if (+str) {
                    resolve(+str * 2)
                } else {
                    reject(new Error('失败'))
                }
            })
        },
        confirmHandler (result) {
            console.log(result)
        }
    }
}
</script>

<style lang="stylus" scoped>
.top-picker
    font-size 32px
    padding 20px 30px
</style>
