<template>
    <div>
        <Serch/>
        <scroll class="herdernav">
           <ul>
               <li v-for="item in homenavdata" 
               :key="item.id"
               >
               {{item.name}}
               </li>
           </ul>
        </scroll>
        <scroll class="contentinner">
        <div class="box">
                <Swipe :imglist="homebannerdata"></Swipe>
                <xieyi/>
                <xinpinlist/>
                <GifImg/>
                <ChaoZhi/>
                <scrolllist/>
                <qianggou/>
                <xinpinsoufa/>
                <renqituijian/>
                <leimurexiao/>
                <fulizhuanqv/>
                <pinpaizhigong/>
                <jingxuanzhungti/>
                <zhongchou/>
        </div>
        </scroll>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import {JVJIA_SHENGHUO} from "../../../urlapi/home/urlapi";
import {HOME_BANNER_SWIPER} from "../../../urlapi/home/urlapi";
export default {
    data() {
        return {
            
        }
    },
    components:{
        Serch:()=>import("../serch/serch"),
        xieyi:()=>import("./children/xieyi"),
        xinpinlist:()=>import("./children/xinpinlist"),
        GifImg:()=>import("./children/gifimg"),
        ChaoZhi:()=>import("./children/chaoZhi9-9zhuanqv"),
        qianggou:()=>import ("./children/xianshiqianggou"),
        xinpinsoufa:()=>import("./children/homexinpinshoufa"),
        renqituijian:()=>import("./children/renqituijian"),
        leimurexiao:()=>import ("./children/leimurexiao"),
        fulizhuanqv:()=>import("./children/fulizuanqv"),
        pinpaizhigong:()=>import ("./children/pinpaizhigong"),
        jingxuanzhungti:()=>import ("./children/jingxuanzhuanti"),
        zhongchou:()=>import ("./children/zhongchou")
    },
    computed: {
        ...mapGetters({
            homenavdata:"homeStore/senddata",
            homebannerdata:"homeStore/sendhomebannerdata"
        })
    },
    methods: {
        ...mapActions({
            homedata:"homeStore/requerydata",
            homeBannerswiperdata:"homeStore/requeryHomeSwiperdata"
        })
    },
    created() {
        this.homedata(JVJIA_SHENGHUO);
        this.homeBannerswiperdata(HOME_BANNER_SWIPER);
    },
}
</script>
<style scoped>

.herdernav{
    height: .3rem;
    background: #fff;
    position: fixed;
    top: .4rem;
    left: 0;
    right: 0;
}
.herdernav ul{
    display: flex;
    height: 100%;
    align-items: center;
    min-width: max-content;
    padding: 0 .4rem 0 0;
}
.herdernav ul li{
    padding: 0 .08rem;
}
.contentinner{
    position: absolute;
    top: .7rem;
    left: 0;
    bottom: .45rem;
    width: 100%;
    
}
.box{
    background: #ccc;
}


</style>
