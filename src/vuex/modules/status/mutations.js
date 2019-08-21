import * as types from './mutation_type.js'
const mutations = {
    [types.VUEX_TEST](state,value){
        state.count += value
        console.log(state.count + value)
    }
}

export default mutations;