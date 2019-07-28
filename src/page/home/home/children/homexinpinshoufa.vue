<template>
    <div class="qianggou">
        <div class="jishi">
            <div>
                <p>新品首发</p>
            </div>
            <div>
                <p>更多<i class="iconfont icon-youjiantou"></i></p>
            </div>
        </div>
        <ul>
            <li v-for="item in homexinpinshoufalist" :key="item.id">
                <div>
                    <img :src="item.primaryPicUrl" alt="图片加载失败">
                </div>
                <p>{{item.name}}<span>￥{{item.counterPrice}}</span></p>
            </li>
        </ul>
    </div>
</template>
<script>
import {HOME_XINPINSOUFA} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"xinpinsoufa",
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters({
            homexinpinshoufalist:"homeStore/gethomexinpinsoufadata"
        })
    },
    created() {
        
        this.$store.dispatch("homeStore/actionhomexinpinsoufa",HOME_XINPINSOUFA)
		
    },
}
</script>
<style scoped>
.qianggou{
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
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
li{
    width: .95rem;
}
li div{
    background: rgba(204,204,204,.3);
    width: .95rem;
    height: .95rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .05rem 0;
}
img{
    width: 1rem;
}
li p{
    padding-left: .1rem;
    font-size: .12rem;
    color: #000;
}
li p span{
    color: #ccc;
    font-size: .12rem;
    text-decoration: line-through;
    margin-left: .05rem;
}
</style>

