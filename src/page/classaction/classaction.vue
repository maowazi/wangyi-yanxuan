<template>
    <div>
        <serch/>
        <div  class="scrollbox">
            <leftnav class="leftnav"/>
            <rightnav class="rightnav"/>
        </div>
    </div>
</template>
<script>
export default {
    name:"classaction",
    components:{
        serch:()=>import("./children/sserch"),
        leftnav:()=>import("./children/leftnav"),
        rightnav:()=>import("./children/rightnav")
    }    
}
</script>
<style scoped>
.scrollbox{
    position: absolute;
    top: 41px;
    bottom: 45px;
    width: 100%;
    background: #fff;
    display: flex;
}
.leftnav{
    width: .5rem;
    height: 100%;
}
.rightnav{
    height: 100%;
}
</style>
