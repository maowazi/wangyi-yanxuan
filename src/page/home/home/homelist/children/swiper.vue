<template>
    <div class="swiper">
        <Swipe :imglist="value"></Swipe>
    </div>
</template>
<script>
export default {
    name:"swiper",
    props:{
        value:{
            type:Array,
            requrire:true
        }
    }
}
</script>
<style scoped>
.swiper{
    background: #fff;
}
</style>
