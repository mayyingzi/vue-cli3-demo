<template>
    <div class="formBind">
        <p>使用v-model在自定义表单中实现数据双向绑定</p>
        <input :value="value" type="number" @input="update" class="inner-inp">
    </div>
</template>

<script>
export default {
    name: 'formBind',
    props: ['value'],
    data () {
        return {
            counter: 0
        }
    },
    methods: {
        update (even) {
            this.$emit('input', even.target.value)
        }
    }
}
</script>

<style lang="stylus" scoped>
p
    text-align left
.inner-inp
    height 60px
    width 100px
    display inline
    text-align center
    margin-bottom 10px
</style>
