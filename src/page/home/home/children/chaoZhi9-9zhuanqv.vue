<template>
    <div class="chaozhi">
        <div v-for="item in homeChaoZhi" :key="item.title">
            <div>
                <h3>{{item.title}}</h3>
                <span>{{item.desc}}</span>
            </div>
            <div>
                <img :src="item.picUrlList[0]" alt="图片加载失败">
                <img :src="item.picUrlList[1]" alt="图片加载失败">
            </div>
        </div>
    </div>
</template>
<script>
import {HOME_CHAOZHI} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"ChaoZhi",
    computed: {
        ...mapGetters({
            homeChaoZhi:"homeStore/gethomechaozhidata"
        })
    },
    created() {
        this.$store.dispatch("homeStore/getHomeChaoZhiData",HOME_CHAOZHI);
       
    },    
}
</script>
<style scoped>
.chaozhi{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background:#fff;
    padding: .05rem .14rem .2rem .14rem ;
}
.chaozhi>div{
    background:rgba(204, 204, 204, .3);
    width: 1.45rem;
    height: 1.1rem;
    margin-bottom: .02rem;
}
img{
    width: .6rem;
}
h3{
    font-size: .14rem;
    font-weight: 900;
    height: .2rem;
    line-height: .2rem;
}
.chaozhi>div div:last-child{
    display: flex;
    justify-content: space-around;
}
.chaozhi>div div:first-child{
    margin-top: .1rem;
    padding-left: .1rem;
}
</style>
