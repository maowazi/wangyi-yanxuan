<template>
    <div class="RightChildren">
        <div v-for="item in classgetRightList" :key="item.id" class="listbox">
            <h3>{{item.name}}</h3>
            <ul>
                <li v-for="ite in item.categoryList" :key="ite.id" >
                    <div>
                        <img v-lazy="ite.wapBannerUrl" alt="图片加载失败">
                    </div>
                    <p>{{ite.name}}</p>
                </li>
            </ul>
        </div>        
    </div>
</template>
<script>
import {CLASSACTION_RIGHTDATA} from "../../../urlapi/classactionApi/classactionapi";
import {mapState} from "vuex";
export default {
    name:"RightChildren",
    props:{
        classgetRightList:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
.listbox{
    margin-top: .1rem;
}
h3{
    border-bottom:1px solid #000;
    padding: .1rem; 
}
ul{
    display: flex;
    flex-wrap: wrap; 
}
ul li{
    width: .76rem;
    margin: 0.1rem 0 0.1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
ul li img{
    width: .6rem;
}
ul li div{
    margin-bottom: .05rem;
}
</style>

