<template>
    <div class="pinpaizhigong">
        <div class="inner">
            <div>
                <p>品牌制造商直供</p>
            </div>
            <div>
                <p>更多<i class="iconfont icon-youjiantou"></i></p>
            </div>
        </div>
       <ul>
           <li v-for="item in homehaiwaizhigong" :key="item.id" :style="{backgroundImage:`url(${item.picUrl})`,backgroundSize:`1.48rem`,backgroundRepeat:`no-repeat`,backgroundPosition:`center center`}">
               <div>
                   <p>{{item.name}}</p>
                   <span>{{item.floorPrice}}元起</span>
               </div>
           </li>
       </ul>
    </div>
</template>
<script>
import {HOME_PINPAIZGIGONG} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"pinpaizhigong",
    data() {
        return {
           
        }
    },
    computed: {
       ...mapGetters({
           homehaiwaizhigong:"homeStore/gethomehaiwaizhigongdata"
       })
    },
    created() {
        this.$store.dispatch("homeStore/actionhomepinpaizhigong",HOME_PINPAIZGIGONG)
    },
}
</script>
<style scoped>
.pinpaizhigong{
    background: #fff;
    padding: .1rem;
    margin-top: .05rem;
}
.inner{
    display: flex;
    justify-content: space-between;
    height: .2rem;
}

.inner div:last-child i{
    font-size: .12rem;
}
ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
ul li{
    width: 1.48rem;
    height: 1.15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .05rem;
    padding-top:.1rem;
    box-sizing: border-box;
}
ul li div{
    text-align: center;
}
ul li div span{
    color:#ccc;
}
</style>

