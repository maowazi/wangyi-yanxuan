import Huadongnav from "./huadongnav/nav";
import Scroll from "./scrollView/scrollView";
import Swiper from "./swiper/homeSwiper";
import ScrollList from "./scrolllist/scrolllist";
// const aaa = {
//     install: function (Vue) {
//         Vue.component(Huadongnav.name, Huadongnav)
//     }
// }

// export default aaa
export default {
    install(Vue) {
        Vue.component(Huadongnav.name, Huadongnav);
        Vue.component(Scroll.name, Scroll);
        Vue.component(Swiper.name, Swiper);
        Vue.component(ScrollList.name, ScrollList);
    }
}