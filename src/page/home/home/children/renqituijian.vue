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
        <div>
            <div>
                <img src="" alt="">
            </div>
            <div>
                <p>APP特惠</p>
                <p></p>
                <p></p>
                <span></span>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
import {HOME_RENQITUIJIAN} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"renqituijian",
    computed: {
        ...mapGetters({
            homerenqituijian:"homeStore/gethomerenqituijianadata"
        })
    },
    created() {
        this.$store.dispatch("homeStore/actionhomerenqituijian",HOME_RENQITUIJIAN)
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
</style>
