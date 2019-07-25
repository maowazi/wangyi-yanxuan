<template>
  <div id="app">
      <router-view></router-view>
      <Tabar v-model="selectIndex"/>
  </div>
</template>
<script>
import Tabar from "./components/tabar/tabar";
import axios from "axios";
import {homeAxiosData} from "./axiosdata/homeaxiosdata/homeaxios";
export default {
    data:function(){
        return {
            selectIndex:0,
            list:[]
        }
    },
    components:{
        Tabar
    },
    created() {
        // axios("/api/home/jvjia_shenghuo")
        //     .then((res)=>{
        //         if(res.status === 200 && res.data.code === 0){
        //             let newdata = res.data.data.map(({id,name})=>({id,name}))
        //             this.list = newdata;
        //         }else{
        //             console.log("失败");
        //         }
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })

        homeAxiosData().then((res)=>{
            console.log(res)
        });
        
    },
}
</script>

<style>


</style>
