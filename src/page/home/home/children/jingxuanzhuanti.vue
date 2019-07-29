<template>
    <div class="jingxuanzhungti">
        <div class="inner">
            <div>
                <p>专题精选</p>
            </div>
            <div>
                <p>更多<i class="iconfont icon-youjiantou"></i></p>
            </div>
        </div>
        <scroll>
            <ul>
                <li v-for="item in homejingpinzhuanti" :key="item.topicId">
                    <div>
                        <img :src="item.scenePicUrl" alt="图片加载失败">
                    </div>
                    <div>
                        <p>{{item.title}}</p>
                        <span>{{item.subtitle}}</span>
                    </div>
                </li>
            </ul>
        </scroll>
    </div>
</template>
<script>
import {HOME_JINFXUANZHUANTI} from "../../../../urlapi/home/urlapi";
import {mapGetters} from "vuex";
export default {
    name:"jingxuanzhungti",
    data() {
        return {
           
        }
    },
    computed: {
       ...mapGetters({
           homejingpinzhuanti:"homeStore/gethomejingpinzhuantidata"
       })
    },
    created() {
        this.$store.dispatch("homeStore/actionhomejingxuanzhuanti",HOME_JINFXUANZHUANTI)
    },
}
</script>
<style scoped>
.jingxuanzhungti{
    background: #fff;
    padding: .1rem;
    margin-top: .05rem;
}
.inner{
    display: flex;
    justify-content: space-between;
    height: .2rem;
}

.inner div:last-child i{
    font-size: .12rem;
}
ul{
    display: flex;
    flex-wrap: nowrap;
    min-width: max-content;
}
ul li {
    margin: 0 .05rem;
    width: 1.9rem;
}
ul li img{
    width: 100%;
}
ul li div:last-child{
    background: rgba(204,204,204,.3);
    padding: .05rem;
    margin-top: -.05rem;
}
ul li div:last-child p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    widows: 1.9rem;
}
ul li div:last-child span{
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    widows: 1.9rem;
}
</style>

