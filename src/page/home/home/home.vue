<template>
    <div>
        <Serch/>
        <scroll class="herdernav">
           <ul>
               <li 
               v-for="(item) in homenavdata" 
               :key="item.id"
               :class="{active:selectIndex === item.id}"
               @click="hangselect(item.id)"
               >
               {{item.name}}
               </li>
           </ul>
        </scroll>
        <scroll class="contentinner">     <!--滚动视图只会滚动第一个元素-->
            <div class="box">
                <div  v-show="isShow">
                    <Swipe :imglist="homebannerdata" ref="swip"></Swipe>
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
                <div v-show="elseshow">
                    <homelist v-model="selectIndex"/>
                </div>
            </div>
        </scroll>
        <mengban v-model="selectIndex" :hand="handelseshow"/>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import {JVJIA_SHENGHUO} from "../../../urlapi/home/urlapi";
import {HOME_BANNER_SWIPER} from "../../../urlapi/home/urlapi";
export default {
    data() {
        return {
            selectIndex:-1,
            isShow:true,
            elseshow:false
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
        zhongchou:()=>import ("./children/zhongchou"),
        mengban:()=>import ("./children/mengban"),
        homelist:()=>import("./homelist/homelist")
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
        }),
        hangselect(id){
            if(id === -1){
                this.$router.push("/home");
                this.isShow = true;
                this.elseshow = false;
            }else{
                this.isShow = false;
                this.elseshow = true;
            }
            this.selectIndex = id;
            
        },
        handelseshow(id){
            if(id === -1){
                this.$router.push("/home")
                this.isShow = true;
                this.elseshow = false;
            }else{
                this.isShow = false;
                this.elseshow = true;
            }
        }
    },
    created() {
        this.homedata(JVJIA_SHENGHUO);
        this.homeBannerswiperdata(HOME_BANNER_SWIPER);
    },
    // updated() {
    //     this.$refs.swip.uped();
    // }
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
    margin-right: .4rem;
}
.herdernav ul{
    display: flex;
    height: 100%;
    align-items: center;
    min-width: max-content;
   
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
.active{
    color:#f40;
}
</style>
