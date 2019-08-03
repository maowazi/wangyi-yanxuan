<template>
    <div class="matter">
        <div class="HeaderBox">
            <matterHeader/>
            <matterHerderNav/>
        </div>
        <div class="commentlistbox">
            <CommentList class="commentinner"/>
        </div>
    </div>
</template>
<script>
import axiox from "axios";
export default {
    name:"Matter",
    components:{
        matterHerderNav:()=>import("./children/matterHeadernav"),
        matterHeader:()=>import ("./children/matterHeader"),
        CommentList:()=>import ("./children/commentList")
    },
    created() {
        
    },
}
</script>
<style scoped>
.HeaderBox{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
}
.commentlistbox{
    position: absolute;
    top: .72rem;
    left: 0;
    width: 100%;
    bottom: .45rem;
}
.commentinner{
    height: 100%;
}
</style>
