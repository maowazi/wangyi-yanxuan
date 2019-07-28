<template>
<div class="swiperbox">
    <h3>私人定制</h3>
    <swiper :options="swiperOption" class="swiper-containe">
        <swiper-slide>
            <div class="scrolllistbox">
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[0].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[0].name}}<span>￥{{homescrolllist[0].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[1].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[1].name}}<span>￥{{homescrolllist[1].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[2].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[2].name}}<span>￥{{homescrolllist[2].retailPrice}}</span></p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="scrolllistbox">
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[3].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[3].name}}<span>￥{{homescrolllist[3].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[4].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[4].name}}<span>￥{{homescrolllist[4].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[5].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[5].name}}<span>￥{{homescrolllist[5].retailPrice}}</span></p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="scrolllistbox">
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[6].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[6].name}}<span>￥{{homescrolllist[6].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[7].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[7].name}}<span>￥{{homescrolllist[7].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[8].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[8].name}}<span>￥{{homescrolllist[8].retailPrice}}</span></p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="scrolllistbox">
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[9].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[9].name}}<span>￥{{homescrolllist[9].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[10].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[10].name}}<span>￥{{homescrolllist[10].retailPrice}}</span></p>
                    </div>
                </div>
                <div class="listinner">
                    <div>
                        <img :src="homescrolllist[11].primaryPicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{homescrolllist[11].name}}<span>￥{{homescrolllist[11].retailPrice}}</span></p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
import {HOME_SCROLLLIST} from "../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
    export default {
        name:"scrolllist",
        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed:1500,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    updateTranslate:true
                }
            };
        },
        computed: {
            ...mapGetters({
                homescrolllist:"homeStore/gethomescrolllistdata"
            })
        },
        created() {
            this.$store.dispatch("homeStore/homescrolllostaction",HOME_SCROLLLIST)
        },
    };
</script>
<style scoped>
.swiperbox{
    background: #fff;
    margin-top: .05rem;
    padding: .05rem 0;
}
.scrolllistbox{
    display: flex;
    width: 3.2rem;
    height: 1.72rem;
}
.listinner{
    width: .94rem;
    margin: 0 .055rem;
}
.listinner div:first-child{
    background: rgba(204, 204, 204, .3);
    width: 100%;
    height:.94rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .1rem;
}
img{
    width:1rem;
}
.listinner div:last-child span{
    color:#f40;
}
h3{
    height: .3rem;
    line-height: .3rem;
    padding-left:.1rem;
    font-size: .14rem;
    font-weight: 900; 
} 
</style>
