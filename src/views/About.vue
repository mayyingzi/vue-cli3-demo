<template>
	<div class="aboutView">
		<p @click="showList">this is about</p>
        <van-button type="warning">主要按钮</van-button>
        <van-button @click="changeUser">修改用户信息</van-button>
        <van-cell-group>
            <van-field
                required
                clearable
                label="用户名"
                icon="question"
                v-model="name"
                @click-icon="$toast(nameTips)"
                placeholder="请输入用户名" />
        </van-cell-group>
        <van-cell-group>
            <van-field
                required
                clearable
                label="年龄"
                icon="question"
                v-model="age"
                @click-icon="$toast(ageTips)"
                placeholder="请输入年龄" />
        </van-cell-group>
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
import { List, Cell, Button, SwipeCell, CellGroup, Dialog, Field } from 'vant'
import { USERINFO_ADD_MUTATION } from '../store/mutationTypes.js'
import { USERINFO_UPDATE_ACTION } from '../store/actionTypes.js'
// import 'vant/lib/vant-css/index.css'

export default {
    name: 'about',
    curCell: null,
    data () {
        return {
            name: 'zhu',
            nameTips: '当前用户名称，提示信息的文案很长，长长长长长长长长长长',
            age: 90,
            ageTips: '用户实际年龄',
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
    computed: {
    },
    components: {
        listBar: () => import('./../components/listBar.vue'),
        [List.name]: List,
        [Cell.name]: Cell,
        [Button.name]: Button,
        [SwipeCell.name]: SwipeCell,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field
    },
    created () {
        // console.log('初始化实例')
    },
    mounted () {
        // console.log('挂载ok，完成渲染about')
        this.$store.commit(USERINFO_ADD_MUTATION, {
            name: this.name,
            age: this.age
        })
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
        },
        changeUser () {
            this.$store.dispatch(USERINFO_UPDATE_ACTION, {
                name: this.name,
                age: this.age
            })
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
