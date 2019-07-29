<template>
    <div class="zhongchou">
        <div class="inner">
            <div>
                <p>众筹</p>
            </div>
            <div>
                <p>更多<i class="iconfont icon-youjiantou"></i></p>
            </div>
        </div>
        <div class="inner2">
            <div class="imgbox" v-for="(item,index) in homezhongchou" :key="index">
                <div>
                    <img :src="item.picUrl" alt="图片加载失败">
                </div>
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.showRetailPrice}}</p>
                    <p></p>
                    <p>{{item.supportNum}}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import {HOME_ZHONGCHOU} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"zhongchou",
    data() {
        return {
           
        }
    },
    computed: {
       ...mapGetters({
           homezhongchou:"homeStore/gethomezhongchoudata"
       })
    },
    created() {
        this.$store.dispatch("homeStore/actionhomezhongchou",HOME_ZHONGCHOU)
    },
}
</script>
<style scoped>
.zhongchou{
    background: #fff;
    padding: .1rem;
    margin-top: .05rem;
    
}
.inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .2rem;
    border-bottom: 1px solid #ccc;
}

.inner div:last-child i{
    font-size: .12rem;
}
.imgbox{
    display: flex;
    justify-content: space-between;
    margin-top: .1rem;
}
.imgbox div:first-child{
    background: #ccc;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgbox img {
    width: 1rem;
}
.imgbox div:last-child{
    width: 1.85rem;
    padding-top: .15rem;
}
.imgbox div:last-child p:first-child{
    width: 1.85rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: .1rem;
}
.imgbox div:last-child p:nth-child(2){
    color: #f40;
    margin-bottom: .1rem;
}
.imgbox div:last-child p:nth-child(3){
    width: 1.8rem;
    height: 2px;
    background: gold;
}
.imgbox div:last-child p:last-child{
    margin-top: .1rem;
    color: #666;
}
</style>

