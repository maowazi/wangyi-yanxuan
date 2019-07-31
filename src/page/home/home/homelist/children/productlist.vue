<template>
    <div v-if="value.length">
        <div class="pronlist" 
            v-for="(item,index) in value[index-1].title" :key="index"
            >
            <h2>{{item}}</h2>
            <p></p>
            <ul>
                <li>
                    <div><img src="" alt=""></div>
                    <p></p>
                    <p><span></span><i></i></p>
                    <span></span><span></span>
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
            title:[],
            frontDesc:[]
        }
    },
    props:{
        value:{
            type:Array,
            required:true
        },
        index:{
            type:Number,
            required:true
        }
    },
    watch: {
        value:function(){
            if(this.index === 0)return
            this.title = this.value[this.index-1].title;
            this.frontDesc = this.value[this.index-1].frontDesc;
            console.log(this.value[this.index-1].frontDesc[this.index-1])
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
ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>

