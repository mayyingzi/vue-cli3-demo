<template>
	<div class="aboutView">
		<p @click="showList">this is about</p>
        <van-button type="warning">主要按钮</van-button>
        <!-- FIXME:动态加载组建  -->
		<div :is="barShow" :msg="msg"></div>
        <p v-for="item in urlType" :key="item" @click="changeUrl(item)">{{item}}</p>
        <div class="list-box">
            <van-list v-model="loading" :finished="finished" @load="onLoad" :loading-text="loadingTxt">
                <van-cell v-for="item in list" :key="item" :title="item" />
            </van-list>
        </div>
        <van-swipe-cell :right-width="60" :left-width="60" :on-close="onClose" v-for="(item, ind) in swipData" :key="item" >
            <span slot="left" class="hide-txt">选择</span>
            <van-cell-group>
                <van-cell :title="'标题'+ ind" :value="item" />
            </van-cell-group>
            <span slot="right" class="hide-txt" @click="onDelete(ind)">删除</span>
        </van-swipe-cell>
	</div>
</template>

<script>
import { List, Cell, Button, SwipeCell, CellGroup, Dialog } from 'vant'
// import 'vant/lib/vant-css/index.css'

export default {
    name: 'about',
    curCell: null,
    data () {
        return {
            barShow: null,
            msg: 'about use list bar',
            urlType: ['wait', 'finished', 'receive'],
            list: [],
            loading: false,
            finished: false,
            loadingTxt: '加载中...',
            swipData: [
                '左右滑动1',
                '左右滑动2',
                '左右滑动3',
                '左右滑动4',
                '左右滑动5'
            ]
        }
    },
    components: {
        listBar: () => import('./../components/listBar.vue'),
        [List.name]: List,
        [Cell.name]: Cell,
        [Button.name]: Button,
        [SwipeCell.name]: SwipeCell,
        [CellGroup.name]: CellGroup
    },
    mounted () {
        // console.log('挂载ok，完成渲染about')
    },
    created () {
        // console.log('初始化实例')
    },
    methods: {
        showList () {
            console.log('展示listbar')
            this.barShow = this.barShow ? '' : 'listBar'
        },
        changeUrl (type) {
            // console.log(type)
            // return
            this.$router.replace({
                path: '/about',
                query: {
                    type
                }
            })
            this.list = []
            this.finished = false
        },
        onLoad () {
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1)
                }
                this.loading = false
                if (this.list.length >= 40) {
                    this.finished = true
                }
            }, 2000)
        },
        onClose (clickPosition, instance) {
            // console.log(clickPosition)
            if (clickPosition !== 'right') {
                instance.close()
                return
            }
            Dialog.confirm({
                message: '确定删除吗？'
            }).then(() => {
                this.swipData.splice(this.curCell, 1)
                this.curCell = null
            }).catch(() => {
                // 取消
                // console.log(err)
                instance.close()
                this.curCell = null
            })
        },
        onDelete (ind) {
            this.curCell = ind
        }
    }
}
</script>
<style lang="stylus">
.list-box
    height 550px
    overflow-y scroll
    font-size 28px
    -webkit-overflow-scrolling touch
    margin-bottom 30px
.aboutView
    .van-swipe-cell__left, .van-swipe-cell__right
        background-color #f60
        font-size 28px
        color #fff
        min-width 140px
        display flex
        align-items center
        justify-content center
    .van-cell__title
        text-align left
</style>
