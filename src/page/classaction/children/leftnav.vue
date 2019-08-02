<template>
    <div class="leftnav">
        <scroll class="scroll">
            <ul>
                <li 
                v-for="(item,index) in classLeftNavData" 
                :key="item.id" 
                @click="handselect(index)"
                :class="{active:index===  selectIndex}"
                >
                    {{item.name}}
                </li>
            </ul>
        </scroll>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name:"leftnav",
    props:{
        classLeftNavData:{
            type:Array,
            required:true
        }
    },
    methods: {
        handselect(index){
            this.$store.commit("classStore/muactionSelectIndex",index)
        }
    },
    computed: {
        ...mapState({
            selectIndex:state=>state.classStore.selectIndex
        })
    },
}
</script>
<style scoped>
.leftnav{
    height: 100%;
}
.scroll{
    height: 100%;
}
ul li{
    padding:.15rem 0; 
}
.active{
    color: #f40;
}
</style>
