import * as types from './status/mutation_type.js/index.js.js'
const mutations = {
    [types.VUEX_TEST](state,value){
        state.count += value
        console.log(state.count + value)
    }
}

export default mutations;