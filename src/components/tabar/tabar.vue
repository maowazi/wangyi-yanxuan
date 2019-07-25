<template>
    <div id="tabar">
        <ul>
            <router-link v-for="(item,index) in tabarList" :to="item.path" :key="item.title" tag="li" @click="handselect(index)" active-class="active">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            tabarList:[
                {icon:"iconfont icon-fangzi",title:"首页",path:"/home"},
                {icon:"iconfont icon-caidan",title:"分类",path:"/classaction"},
                {icon:"iconfont icon-dingdan",title:"识物",path:"/matter"},
                {icon:"iconfont icon-gouwuche",title:"购物车",path:"/cart"},
                {icon:"iconfont icon-wodeda",title:"个人",path:"/mine"}
            ],
            active:{
                color: "#f40",
                "font-size":"16px"
            }
        }
    },
    props:{
        value:{
            type:Number,
            default:0
        }
    },
    methods: {
        handselect(index){
            console.log(index)
            this.$emit("input",index)
        }
    }, 
    created() {
    },
}
</script>
<style scoped>
.active{
    color: #f40;
}
#tabar{
    position: absolute;
    left: 0;
    bottom: 0;
    width:100%;
    height: .45rem;
    background: #fff;
}
ul{
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
}
li{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100%;
    justify-content: space-around;
}
</style>

