import Vue from 'vue'
import Vuex from 'vuex'
import user from './mudules/user'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        user
    }
})
export default store