<template>
    <div class="leimurexiao">
        <div class="leimu">
            <div>
                <p>类目热销</p>
            </div>
        </div>
        <div class="leimuinner">
            <div class="rexiao" v-for="item in homeleimurexiao" :key="item.categoryName">
                <p>{{item.categoryName}}</p>
                <p><img :src="item.showPicUrl" alt="图片加载失败"></p>
            </div>
        </div>
        <ul>
            <li v-for="item in homeleimulist" :key="item.categoryName"><p>{{item.categoryName}}</p><img :src="item.showPicUrl" alt="图片加载失败"></li>
        </ul>
    </div>
</template>
<script>
import {HOME_LEIMUREXIAO} from "../../../../urlapi/home/urlapi";
import {mapGetters,mapState} from "vuex";
export default {
    name:"leimurexiao",
    computed: {
        ...mapGetters({
            homeleimurexiao:"homeStore/gethomeleimurexiaodata"
        }),
        ...mapState({
            homeleimulist:state=>state.homeStore.Homeleimurexiaodata
        })
    },
    created() {
        this.$store.dispatch("homeStore/actionhomeleimurexiao",HOME_LEIMUREXIAO);
    },
}
</script>
<style scoped>
.leimurexiao{
    background: #fff;
    padding: .1rem;
    margin-top: .05rem;
}
.leimu{
    height: .2rem;
}
.rexiao{
    display: flex;
}
.rexiao img{
    width: .8rem;
}
.leimuinner{
    display: flex;
    justify-content: space-between
}
.leimuinner>div{
    width: 1.47rem;
    height: .9rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}
.leimuinner div:first-child{
    background: rgba(255,222,137,.3);
}
.leimuinner div:last-child{
    background: rgba(0,0,255,.2);
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: .05rem;
}
li{
    background:rgba(204,204,204,.3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: .72rem;
    height: .8rem;
    margin-bottom: .05rem;
}
li img{
    width: .5rem;

}
</style>
