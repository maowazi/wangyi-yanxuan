<template>
    <div class="rightNavList">
        <ul v-for="(item,index) in classgetRightList" :key="index">
            <li v-for="ite in item" :key="ite.id">
                <div>
                    <img :src="ite.bannerUrl" alt="图片加载失败">
                </div>
                <p>{{ite.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"rightNavList",
    props:{
        classgetRightList:{
            type:Array,
            required:true
        }
    }    
}
</script>
<style scoped>
.rightNavList{
    margin-top:.1rem; 
}
ul{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: .6rem;
    margin-bottom: .1rem;
}
ul li img{
    width: .6rem;
}
ul li p{
    text-align: center;
}
</style>

