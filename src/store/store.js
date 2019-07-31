import Vue from 'vue'
import Vuex from 'vuex';
import homeStore from "./homestore/homestore";
import classStore from "./classaction/classstore";
import matterStore from "./matter/matterStore";
import cartStore from "./cartStore/cartStore";
import parnlist from "./homestore/homepronlist/homepronlist";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        homeStore,
        classStore,
        matterStore,
        cartStore,
        parnlist
    }
})
