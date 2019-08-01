<template>
    <div class="homelist">
        <Swipe :imglist="homebannderlist"/>
        <pronlist v-model="homepronlist"/>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    name:"homelist",
    props:{
        value:{
            type:Number,
            required:true
        }
    },
    components:{
        swiper:()=>import("./children/swiper"),
        pronlist:()=>import ("./children/productlist")
    },
    watch: {
        value(){ //监听传过来的值是否变化
            this.$store.dispatch("parnlist/actionhomebannerlist",this.value);
            this.$store.dispatch("parnlist/actionhomepronlist",this.value)
        }
    },
    computed: {
        ...mapGetters({
            homebannderlist:"parnlist/gethomebanndrlist",
            homepronlist:"parnlist/gethomepronlist"
        })
    }
}
</script>
<style scoped>
.homelist{
    background: #ccc;
}
</style>
