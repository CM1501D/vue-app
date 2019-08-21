import Vue from 'vue'
import Vuex from 'vuex'
import status from './modules/status/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        status
    }
})

export default store;
console.log(store)
