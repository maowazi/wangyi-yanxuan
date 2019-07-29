<template>
    <div class="renqituijian">
        <div class="jishi">
            <div>
                <p>人气推荐</p>
            </div>
            <div>
                <p>更多<i class="iconfont icon-youjiantou"></i></p>
            </div>
        </div>

        <div class="renqituijian2" v-for="item in homerenqituijian" :key="item.id">
            <div>
                <img :src="item.primaryPicUrl" alt="图片加载失败">
            </div>
            <div>
                <p>APP特惠</p>
                <p>{{item.name}}</p>
                <p>{{item.simpleDesc}}</p>
                <span>￥{{item.counterPrice}}</span>
            </div>
        </div>

        <div class="renqituijina3">
            <div v-for="item in list" :key="item.id">
                <div>
                    <img :src="item.primaryPicUrl" alt="图片加载失败">
                </div>
                <p>{{item.name}}<span>￥{{item.counterPrice}}</span></p>
            </div>

        </div>
    </div>
</template>
<script>
import {HOME_RENQITUIJIAN} from "../../../../urlapi/home/urlapi";
import {mapGetters,mapState} from "vuex";
export default {
    name:"renqituijian",
    computed: {
        ...mapGetters({
            homerenqituijian:"homeStore/gethomerenqituijianadata"
        }),
        ...mapState({
            list:state=>state.homeStore.Homerenqituijiandata
        })
    },
    created() {
        this.$store.dispatch("homeStore/actionhomerenqituijian",HOME_RENQITUIJIAN);
    },
}
</script>
<style scoped>
.renqituijian{
    margin-top: .05rem;
    background: #fff;
    padding: .1rem;
    margin-top: .05rem;
}
.jishi{
    display: flex;
    justify-content: space-between;
    height: .2rem;
}

.jishi div:last-child i{
    font-size: .12rem;
}
.renqituijian2{
    display: flex;
    background: navajowhite;
}
.renqituijian2 div:first-child{
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.renqituijian2 div:first-child img{
    width: 1.3rem;
}
.renqituijian2 div:last-child p:first-child{
    color:#f40;
    border: 1px solid #d40;
    width: .5rem;
    text-align: center;
    margin-top: .25rem;
    margin-bottom: .07rem;
}
.renqituijian2 div:last-child p:nth-child(2){
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1.5rem;
    font-size: .14rem;
}
.renqituijian2 div:last-child p:nth-child(3){
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1.6rem;
    color:#ccc;
}
.renqituijian2 div:last-child span{
    color: #f40;
}
.renqituijina3{
    display: flex;
    justify-content: space-between;
}
.renqituijina3>div{
    width: .95rem;
    margin-top: .1rem;
}
.renqituijina3>div>div{
    background: rgba(204,204,204,.2);
    height:.95rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.renqituijina3>div>div img{
    width: .9rem;

}
.renqituijina3>div>p span{
    color:#e40;
}
</style>
