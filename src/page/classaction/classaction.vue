<template>
    <div>
        <serch/>
        <div  class="scrollbox">
            <leftnav class="leftnav" v-model="selectIndex" :classLeftNavData="classLeftNavData"/>
            <rightnav class="rightnav" :selectIndex="selectIndex"/>
        </div>
    </div>
</template>
<script>
import {CLASSACTION_LEFTDATA} from "../../urlapi/classactionApi/classactionapi";
import {mapGetters} from "vuex";
export default {
    name:"classaction",
    data() {
        return {
            selectIndex:0
        }
    },
    components:{
        serch:()=>import("./children/sserch"),
        leftnav:()=>import("./children/leftnav"),
        rightnav:()=>import("./children/rightnav")
    },
    computed: {
        ...mapGetters({
            classLeftNavData:"classStore/getclassLeftNavData"
        })
    },
    created() {
        this.$store.dispatch("classStore/classActionLeftData",CLASSACTION_LEFTDATA);
        
    },
    watch: {
        selectIndex(){
            this.$store.dispatch("classStore/classActionRightData",[CLASSACTION_RIGHTDATA,this.selectIndex]);
        }
    },    
}
</script>
<style scoped>
.scrollbox{
    position: absolute;
    top: .41rem;
    bottom: .45rem;
    width: 100%;
    background: #fff;
    display: flex;
}
.leftnav{
    height: 100%;
    padding: 0 .1rem 0 .1rem;
    margin-top: .1rem;
    width: .5rem;
    /* flex: 1 0; */
}
.rightnav{
    height: 100%;
    flex: 1;
}
</style>
