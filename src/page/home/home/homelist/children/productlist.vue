<template>
    <div v-if="value.length">
        <div class="pronlist" 
            v-for="(item,index) in value" :key="index"
            >
            <h2>{{item.category.name}}</h2>
            <p>{{item.category.frontName}}</p>
            <ul>
                <li v-for="(ite,index) in item.itemList" :key="index">
                    <div>
                        <img v-lazy="ite.listPicUrl" alt="图片加载失败">
                        <p>{{ite.simpleDesc}}</p>    
                    </div>
                    <p>{{ite.name}}</p>
                    <p><span>¥{{ite.retailPrice}}</span><i>¥{{ite.counterPrice}}</i></p>
                    <span v-for="(it,index) in ite.tagCnts" :key="index" :class="it.txt?'pan':''">{{it.txt}}</span>
                </li>
            </ul>  

        </div>
    </div>
</template>
<script>
export default {
    name:"pronlist",
    data() {
        return {
            
        }
    },
    props:{
        value:{
            type:Array,
            required:true
        }
    },
    watch: {
        value:function(){
            
        }
    },
}
</script>
<style scoped>
.pronlist{
    margin-top: .05rem;
    background: #fff;
    padding: .05rem;
}
h2{
    font-size: 14px;
    font-weight: 900;
    text-align: center;
    padding: 5px 0;
}
.pronlist>p{
    text-align: center;
    color: #666;
    padding: 5px 0;
}
ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
ul li{
    width: 150px;
    margin-bottom: 10px;
}
li>div{
    width: 100%;
}
img{
    width: 100%;
    display: block;
}
li>div p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: khaki;
    color:#666;
}
li>p:nth-of-type(1){
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 5px 0;
}
li>p:nth-of-type(2) span{
    color:#f40;
    font-size: 14px;
    margin: 0 3px;
}
li>p:nth-of-type(2) i{
    color:#ccc;
    text-decoration: line-through;
}
li .pan{
    display: inline-block;
    border: 1px solid #f40;
    border-radius: 6px;
    color:#f40;
    padding: 2px;
    margin-right: 3px;
}
</style>

