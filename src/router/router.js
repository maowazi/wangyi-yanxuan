import Vue from 'vue'
import Router from 'vue-router';
import Home from "./home/home";
import classaction from "./classaction/classaction";
import matter from "./matter/matter";
import cart from "./cart/cart";
import mine from "./mine/mine";
Vue.use(Router)

const routers = [
    ...Home,
    ...classaction,
    ...matter,
    ...cart,
    ...mine,
    {
        path: "**",
        redirect:"/home"
    }
]
export default new Router({
  mode: 'history',
  routes: routers
})
