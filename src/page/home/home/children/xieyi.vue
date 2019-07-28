<template>
    <div class="xieyi">
        <div v-for="item in homexieyidata" :key="item.desc"><img :src="item.icon" alt="图片加载失败"><span>{{item.desc}}</span></div>        
    </div>
</template>
<script>
import {HOME_XIEYI} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex"
export default {
    name:"xieyi",
    computed: {
        ...mapGetters({
            homexieyidata:"homeStore/sendhomexieyidata"
        })
    },
    methods: {
        
    },
    created() {
        this.$store.dispatch("homeStore/xieYiAction",HOME_XIEYI);
        
    },
}
</script>
<style scoped>
.xieyi{
    display: flex;
    height: .3rem;
    background:#fff;
    justify-content: space-around;
    align-items: center;
}
img{
    width: .17rem;
    vertical-align: middle;
}
</style>
