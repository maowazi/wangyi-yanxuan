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

        homeAxiosData().then((res)=>{
            console.log(res)
        });
    },
}
</script>

<style>


</style>
