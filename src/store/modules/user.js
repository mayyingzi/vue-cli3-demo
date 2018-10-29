/**
 * @file: 用户数据管理
 * @author: zhuxy
 */
import * as MUTATIONS from '../mutationTypes'
import * as ACTIONS from '../actionTypes'
export default{
    state: {
        name: '',
        age: ''
    },
    mutations: {
        [MUTATIONS.USERINFO_ADD_MUTATION] (state, info) {
            state = { ...info }
        }
    },
    getters: {

    },
    actions: {
        [ACTIONS.USERINFO_UPDATE_ACTION] ({ commit }, data) {
            commit(MUTATIONS.USERINFO_ADD_MUTATION, data)
        }
    }

}
