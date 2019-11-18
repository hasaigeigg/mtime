import Vue from 'vue';
import Vuex from 'vuex';
import find from './find'
import city from './city'
import cart from './cart'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        find,
        city,
        cart
    }
})

export default store;