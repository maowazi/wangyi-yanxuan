import axios from "axios";
const state = {
    matterHeaderNavData: [],
    HeaderNavSelectId: 20,
    matterCommentListData:[]
}
const getters = {
    getMatterHerderNavData(state) {
        return state.matterHeaderNavData
    },
    getMatterCommentListData(state) {
        return state.matterCommentListData
    }
}
const mutations = {
    muactionMatterHeaderData(state,params) {
        state.matterHeaderNavData = params
    },
    muactionSelectId(state,params) {
        state.HeaderNavSelectId = params
    },
    muactionMatterCommentListData(state, params) {
        state.matterCommentListData = params
    }
}
const actions = {
    actionmatterheaderdata(cmit,params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === "200") {
                    let newData = res.data.data.map(({ tabId, tabName }) => ({ tabId, tabName})) 
                    cmit.commit("muactionMatterHeaderData",newData)
                }
            })
            .catch((err) => {
            console.log(err)
        })
    },
    actionMatterCommentList(cmit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === "200") {
                    let newData = res.data.data.map(({ content, nickName, commentTime, itemPic, avatar, itemName, itemTag, itemId, discountPrice, bannerInfo }) => ({ content, nickName, commentTime, itemPic, avatar, itemName, itemTag, itemId, discountPrice, bannerInfo }))
                    
                    cmit.commit("muactionMatterCommentListData", newData)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}