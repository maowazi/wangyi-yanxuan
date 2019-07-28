<template>
    <div class="xinpinlist">
        <ul>
            <li v-for="item in xinpinshoufachushiji" :key="item.text">
                <img :src="item.picUrl" alt="图片加载失败">
                <span>{{item.text}}</span>
            </li>
        </ul>       
    </div>
</template>
<script>
import {HOME_XINPIN_CHUSHIJI} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex"
export default {
    name:"xinpinlist",
    computed: {
        ...mapGetters({
            xinpinshoufachushiji:"homeStore/sendhomechushijidata"
        })
    },
    created() {
        this.$store.dispatch("homeStore/homeXinPinChuShiJiAction",HOME_XINPIN_CHUSHIJI)
    },
}
</script>
<style scoped>
.xinpinlist{
    background: #fff;
}
img{
    width: .45rem;
    margin:0 0 0.05rem 0; 
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: .1rem;
}
li{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .03rem;
}
</style>


