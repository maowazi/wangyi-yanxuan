<template>
    <div class="matterherderNav">
        <scroll>
            <ul>
                <li v-for="item in headerNavData" :key="item.tabId"
                @click="handselectid(item.tabId)"
                :class="{active:item.tabId === selectId}"
                >
                    {{item.tabName}}
                </li>
            </ul>
        </scroll>
    </div>
</template>
<script>
import {MATTER_HEADERNAV} from "../../../urlapi/matter/matterapi";
import {mapState} from "vuex";
import {mapGetters} from "vuex";
export default {
    name:"matterHerderNav",
    created() {
        this.$store.dispatch("matterStore/actionmatterheaderdata",MATTER_HEADERNAV)
    },
    computed: {
        ...mapGetters({
            headerNavData:"matterStore/getMatterHerderNavData"
        }),
        ...mapState({
            selectId:state=>state.matterStore.HeaderNavSelectId
        })
    },
    methods: {
        handselectid(id){
            this.$store.commit("matterStore/muactionSelectId",id)
        }
    }
}
</script>
<style scoped>
.active{
    color:#f40;
}
.matterherderNav{
    background: rgba(204,204,204,.5);
    border-bottom: 1px solid #666;
}
ul{
    display: flex;
    min-width: max-content;
    height: .3rem;
    align-items: center;
}
ul li{
    padding: 0 .09rem;
}
</style>
