<template>
<scroll>
    <div class="content">
        <div v-for="(item,index) in commentList" :key="index" class="contentinner">
            <div class="innertop">
                <div>
                    <img v-lazy="item.bannerInfo.picUrl" alt="图片加载失败">
                </div>
                <div>
                    <h3>{{item.itemName}}</h3>
                    <p class="Pactive"><span v-for="(ite,index) in item.itemTag" :key="index">{{ite}}</span></p>
                    <p><span>¥{{item.discountPrice}}</span><i class="iconfont icon-gouwuche"></i></p>
                    <img v-lazy="item.itemPic" alt="图片加载失败">
                </div>
            </div>

            <div class="innerbottom">
                <p></p>
                <div>
                    <img v-lazy="item.avatar" alt="图片加载失败">
                </div>
                <div>
                    <div class="username">
                        <span>{{item.nickName}}</span>
                        <span>{{item.commentTime}}</span>
                    </div>
                    <div class="comment">
                        <p>{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</scroll>
</template>
<script>
import {MATTER_COMMENTLIST} from "../../../urlapi/matter/matterapi";
import {mapGetters, mapActions} from "vuex";
export default {
    name:"CommentList",
    created() {
        this.$store.dispatch("matterStore/actionMatterCommentList",MATTER_COMMENTLIST);
    },
    computed: {
        ...mapGetters({
            commentList:"matterStore/getMatterCommentListData"
        })
    },
}
</script>
<style scoped>
.content{
    background: rgba(250,128,114,.5);
}
.contentinner{
    background:#fff;
    margin-top: .05rem;
    padding: .1rem .1rem;
}
.innertop{
    display: flex;
    justify-content: space-between;
}
.innertop div:first-child img{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: .05rem;
}
.innertop>div:last-child{
    width: 1.4rem;
}
.innertop>div:last-child img{
    width:.6rem;
    margin-top: .05rem;
}
.innertop>div:last-child h3{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 900;
    font-size: .14rem;
}
.Pactive span{
    display: inline-block;
    padding: 0 .03rem;
    border: 1px solid #f40;
    border-radius: .03rem;
    margin: .05rem 0;
    color:#f40;
}
.innertop>div:last-child p:nth-of-type(2){
    margin-top:.05rem;
}
.innertop>div:last-child p:nth-of-type(2) span{
    color:#f40;
    font-size: .14rem;
}
.innertop>div:last-child p:nth-of-type(2) i{
    display: inline-block;
    background: #f40;
    color: #fff;
    padding: .02rem;
    border-radius: 50%;
    margin-left: .03rem;
}
.innerbottom{
    display: flex;
    background: rgba(204,204,204,.3);
    position: relative;
    margin-top: .1rem;
    padding: .05rem;
    border-radius: .03rem;
    justify-content: space-between;
}
.innerbottom>p{
    position: absolute;
    border: .06rem solid rgba(204,204,204,.3);
    top: -.12rem;
    left: .3rem;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
}
.innerbottom img{
    width: .5rem;
    border-radius: 50%;
}
.innerbottom>div:nth-of-type(2){
    width: 2.3rem;
    margin-top: .2rem;
}
.username{
    border-bottom: 1px solid #666;
    padding: .05rem 0;
}
.username>span{
    color:#666;
}
.username>span:first-child{
    margin-right: .1rem;
}
.comment{
    padding: .05rem 0;
}
.comment p{
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow: hidden;
}
</style>
