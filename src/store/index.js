import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
import product from './modules/product';
import cart from './modules/cart';
export default new Vuex.Store({
    modules: {
        product,
        cart
    }

})


