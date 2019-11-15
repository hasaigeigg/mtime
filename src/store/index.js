import Vue from 'vue';
import Vuex from 'vuex';
import find from './find'
import city from './city'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        find,
        city
    }
})

export default store;