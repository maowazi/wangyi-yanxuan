<template>
    <div class="qianggou">
        <div class="jishi">
            <div>
                <p>限时购   <span>{{x}}</span> : <span>{{f}}</span> : <span>{{s}}</span> </p>
            </div>
            <div>
                <p>更多<i class="iconfont icon-youjiantou"></i></p>
            </div>
        </div>
        <ul>
            <li v-for="item in homeqinggouliat" :key="item.itemId">
                <div>
                    <img :src="item.showPicUrl" alt="图片加载失败">
                </div>
                <p>￥{{item.activityPrice}}<span>￥{{item.originPrice}}</span></p>
            </li>
        </ul>
    </div>
</template>
<script>
import {HOME_QIANGGOU} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"qianggou",
    data() {
        return {
            d:0,
            x:0,
            f:0,
            s:0,
            timer:null
        }
    },
    computed: {
        ...mapGetters({
            homeqinggouliat:"homeStore/gethomeqianggoudata"
        })
    },
    created() {
        let enddate = new Date("2019.8.8 09:00:00");
        let x,f,s = 0;
        this.timer = setInterval(()=>{
            let stardate = new Date();
            x = parseInt(parseInt(diff(stardate,enddate)) / 60 / 60);
            f = parseInt( parseInt(diff(stardate,enddate)) / 60 ) % 60;
            s = parseInt(diff(stardate,enddate)) % 60;
            if(x <= 0 && f <= 0 && s <= 0){
                this.x = 0;
                this.f = 0;
                this.s = 0;
                clearInterval(this.timer)
            }else{
            console.log()
                this.x = x < 10 ? "0" + x : x;
                this.f = f < 10 ? "0" + f : f;
                this.s = s < 10 ? "0" + s : s;
            }
        },1000);
        this.$store.dispatch("homeStore/actionhomeqianggou",HOME_QIANGGOU)
		
    },
}
</script>
<style scoped>
.qianggou{
    margin-top: .05rem;
    background: #fff;
    padding: .1rem;
}
.jishi{
    display: flex;
    justify-content: space-between;
    height: .2rem;
}
.jishi div:first-child span{
    display: inline-block;
    width: .15rem;
    text-align: center;
    background: #000;
    color: #fff;
}
.jishi div:last-child i{
    font-size: .12rem;
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    font-size: .14rem;
    font-weight: 900;
    color: #f40;
}
li p span{
    color: #ccc;
    font-size: .12rem;
    text-decoration: line-through;
    margin-left: .05rem;
}
</style>

