<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{curTit}}</div>
    <div>{{addParams}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    data () {
        return {
            curTit: '初始化tit',
            addParams: ''
        }
    },
    created () {
    },
    mounted () {
        console.log(process.env)
        console.log(111)
        setTimeout(() => {
            this.curTit = '更新的tit'
            this.addParams = '今安徽的机会'
            this.$nextTick(() => {
                console.log(this.$el)
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
    components: {
        HelloWorld
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
        }
    }
}
</script>
