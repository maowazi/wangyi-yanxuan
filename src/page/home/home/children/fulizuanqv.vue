<template>
    <div class="fulizhuanqv">
        <div v-for="item in homefulizhuanqv" :key="item.title">
            <div>
                <h3></h3>
                <p></p>
                <span></span>
            </div>
            <div>
                <span></span>
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
}
.fulizhuanqv div:nth-child(1){
    background: rgba(0,0,255,.2);
}
.fulizhuanqv div:nth-child(2){
    background: rgba(173,255,47,.2);
}
.fulizhuanqv div:nth-child(3){
    background: rgba(255,228,196,.3);
}
.fulizhuanqv div:nth-child(4){
    background: seashell;
}
</style>

