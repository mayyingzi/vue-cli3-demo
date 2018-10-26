<template>
  <div class="list-bar">
    <h1>{{msg}}</h1>
    <p class="in-txt">{{msg}}文案修改字体psd：28px</p>
  </div>
</template>

<script>
export default {
    name: 'listBar',
    props: {
        msg: String
    },
    mounted () {
        console.log('渲染完成')
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.list-bar
    h3
        margin 40px 0 0
    ul
        list-style-type none
        padding 0
    li
        display inline-block
        margin 0 10px
    a
        color #42b983
    .in-txt
        font-size 28px
        border 1PX solid #ff4d6a
        border-radius 6px
</style>
