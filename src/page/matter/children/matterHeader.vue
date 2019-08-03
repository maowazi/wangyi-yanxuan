<template>
    <div class="matterHeader">
        <div class="inner">
            <div class="iconfont icon-fangzi">

            </div>
            <div>
                <p @click="handselectaction(1)" :class="{active:selectActive}">发现</p>
                <p @click="handselectaction(2)" :class="{active:selectActive2}">甄选家</p>
            </div>
            <div>
                <i class="iconfont icon-fangdajing" ></i>
                <span class="iconfont icon-gouwuche" ></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"matterHeader",
    data() {
        return {
            selectActive:true,
            selectActive2:false
        }
    },
    methods: {
        handselectaction(params){
            if(params === 1){
                this.selectActive = true,
                this.selectActive2 = false
            }else{
                this.selectActive = false,
                this.selectActive2 = true
            }
        }
    },    
}
</script>
<style scoped>
.matterHeader{
    background: rgba(204,204,204,.4);
    border-bottom: 1px solid #666;
}
.inner{
    display: flex;
    height: .4rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 .1rem;
}
.inner div:first-child{
    color:#999;
    font-size: .2rem;
}
.inner div:nth-child(2){
    display: flex;
    width: .8rem;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.inner div:last-child{
    display: flex;
    width: .5rem;
    justify-content: space-between;
}
i,span{
    font-size: .2rem;
    color: #999;
}
.active{
    font-size: .18rem;
    color:#f40;
}
</style>
