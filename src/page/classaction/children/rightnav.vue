<template>
    <div class="rightnav">
        <scroll class="scroll">
            <div class="box">
                <Swipe :imglist="classactionbannerlist" class="styleData"/>
                <rightNavList :classgetRightList="classgetRightList" v-if="selectIndex <= 3"/>
                <RightChildren :classgetRightList="classgetRightList" v-else/>
            </div>
        </scroll>
    </div>
</template>
<script>
import {CLASSACTION_BANNERLISTDATA,CLASSACTION_RIGHTDATA} from "../../../urlapi/classactionApi/classactionapi";
import {mapState,mapGetters} from "vuex";
import RightNavList from "./rightchildrenlist";
import Rightlist from "./rightchildren";
export default {
    name:"rightnav",
    data() {
        return {

        }
    },
    components:{
        [RightNavList.name]:RightNavList,
        [Rightlist.name]:Rightlist
    },
    computed: {
        ...mapState({
            selectIndex:state=>state.classStore.selectIndex
        }),
        ...mapGetters({
            classactionbannerlist:"classStore/getclassBannerListData",
            classgetRightList:"classStore/getclassRightListData"
        })
    },
    created() {
        this.$store.dispatch("classStore/actionclassbannerlist",[CLASSACTION_BANNERLISTDATA,this.selectIndex]);
        this.$store.dispatch("classStore/classActionRightData",[CLASSACTION_RIGHTDATA,this.selectIndex]);
    },
    watch: {
        selectIndex(){
            this.$store.dispatch("classStore/classActionRightData",[CLASSACTION_RIGHTDATA,this.selectIndex]);
        }
    },
}
</script>
<style scoped>
.rightnav{
    height: 100%;
    width: 100%;
    padding: .1rem;
    box-sizing: border-box;
}
.scroll{
    height: 100%;
    width: 100%;
}
.box{
    width: 100%;
}
.styleData{
    width: 100%;
}
.swiper-container.styleData.swiper-container-initialized.swiper-container-horizontal.swiper-container-ios{
    width: 2.3rem;
    height: 1rem;;
}
</style>
