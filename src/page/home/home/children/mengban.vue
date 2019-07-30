<template>
<div>
    <transition name="meng">
        <div class="mengban" v-show="flag">
            <div class="box"></div>
            <div class="menbaninner">
                <div>
                    <h2>全部频道</h2>
                    
                </div>
                
            </div>
        </div>
    </transition>
    <div class="iconfont icon-xiajiantou" @click="handshow" :class="flag?'active':'active2'"></div>
</div>
</template>
<script>
import animate from 'animate.css';
export default {
    name:"mengban",
    data() {
        return {
            flag:false
        }
    },
    methods: {
        handshow(){
            this.flag = ! this.flag
        }
    },
}
</script>
<style scoped>
.mengban{
    position: absolute;
    top: .4rem;
    bottom: 0;
    width: 100%;
    z-index: 2;
}
.box{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,.4);
}
.menbaninner{
    background: #fff;
    position: absolute;
    z-index: 3;
}
.menbaninner>div{
    display: flex;
    width: 3.2rem;
    height: .3rem;
    align-items: center;
    padding-left:.1rem;
    box-sizing: border-box;
}
.icon-xiajiantou{
    position: absolute;
    right:0.1rem;
    top: .45rem;
    z-index: 4;
}
.active{
    transition: .5s linear;
    transform:rotateZ(180deg);
}
.active2{
    transition: .5s linear;
    transform:rotateZ(0deg);
}
.meng-enter-active {         /*进来*/
  animation: bounce .5s linear;
}
.meng-leave-active {             /*出去*/
  animation: bounce-in .5s linear;
}
@keyframes bounce-in{
    0%{
        transform: translateY(0px)
    }
    100%{
        transform: translateY(-500px)
    }
}
@keyframes bounce{
    0%{
        transform: translateY(-500px)
    }
    100%{
        transform: translateY(0px)
    }
}
</style>
