<template>
    <div class="fulizhuanqv">
        <div v-for="item in homefulizhuanqv" :key="item.title">
            <div>
                <h3>{{item.title}}</h3>
                <p>{{item.subTitle}}</p>
                <span>{{item.benefitSpot}}</span>
            </div>
            <div :style="{background:'url('}">
                <span>绝地反击的是</span>
                <i></i>
            </div>
        </div>  
    </div>
</template>
<script>
import {HOME_FULIZUANQV} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"fulizhuanqv",
    computed: {
        ...mapGetters({
            homefulizhuanqv:"homeStore/gethomefulizhuanqvdata"
        })
    },
    created() {
        this.$store.dispatch("homeStore/actionhomefulizhuanqv",HOME_FULIZUANQV)
    },
}
</script>
<style scoped>
.fulizhuanqv{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #fff;
    padding: .1rem;
    margin-top: .05rem;
}
.fulizhuanqv>div{
    padding: .1rem;
    width: 1.28rem;
    height:.8rem;
    margin-bottom: .05rem;
    display: flex;
}
.fulizhuanqv>div:nth-child(1){
    background: rgba(0,0,255,.2);
}
.fulizhuanqv>div:nth-child(2){
    background: rgba(173,255,47,.2);
}
.fulizhuanqv>div:nth-child(3){
    background: rgba(255,228,196,.3);
}
.fulizhuanqv>div:nth-child(4){
    background: seashell;
}
</style>

