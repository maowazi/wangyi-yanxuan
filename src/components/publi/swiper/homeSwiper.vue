<template>
    <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide :style='styleData' v-for="item in imglist" :key="item.id">
                <img :src="item.picUrl"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name:"Swipe",
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
        props:{
            imglist:{
                type:Array
            },
            styleData:{
                type:Object,
                default:function(){
                    return {
                        height:"150px"
                    }
                }
            }
        },
        methods: {
            
        },
        updated() {
            
        },
    };
</script>
<style scoped>

    .box img{
        width: 100%;
        height: 100%;
    }
</style>
