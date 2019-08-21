import * as types from './mutation_type.js'   //es6语法
const actions = {
    addCount(context,value){
        console.log(context)
        console.log(value)
        context.commit(types.VUEX_TEST,value)
    }
}

export default actions;