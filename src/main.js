import Vue from "vue";
import App from "./App";
import store from "./store/store";
import router from "./router/router";
import pulic from "./components/publi/publi";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import VueLazyload from 'vue-lazyload'
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload)

Vue.use(pulic);
export default new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
