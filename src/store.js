import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add: (state) => {
            state.count++
        }
    },
    actions: {
        agetCount: ({commit}) => {
            commit('add')
        }
    },
    getters: {
        getCount: state => {
            return "----" + state.count + "----"
        }
    }, plugins: [vuexLocal.plugin]
})
