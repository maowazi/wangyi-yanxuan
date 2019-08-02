<template>
<!-- 因为是异步请求数据所以会出现不能循环轮播,给组件加一个判断当数据有长度(个数不是零时再创建) -->
    <swiper v-if="imglist.length" :options="swiperOption" class="swiper-container" ref="swip">
        <swiper-slide :style='styleData' v-for="(item,index) in imglist" :key="index">
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
                    loop: true,      //让其循环轮播
                    speed:1500,      //图片划过的速度
                    autoplay: {
                        delay: 3000, //多久滑动一次
                        disableOnInteraction: false   //鼠标滑动后依然自动轮播
                    },
                    pagination: {
                        el: ".swiper-pagination",     //找到小圆点
                        clickable: true               //点击时跳到当前图片
                    }
                }
            };
        },
        props:{
            imglist:{
                type:Array,
                required:true
            },
            styleData:{
                type:Object,
                default:function(){
                    return {
                        height:"1.5rem"
                    }
                }
            }
        }
    };
</script>
<style scoped>

.box img{
    width: 100%;
    height: 100%;
}

</style>
