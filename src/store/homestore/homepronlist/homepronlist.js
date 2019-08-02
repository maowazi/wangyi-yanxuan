import axios from "axios";
import { HOME_BANNERLIST, HOME_PRONLIST } from "../../../urlapi/home/pronlistapi/pronlistapi";
const state = {
    selectbannerlist: [],
    selectpronlist:[]
}
const getters = {
    gethomebanndrlist(state) {
        return [...state.selectbannerlist]
    },
    gethomepronlist(state) {
        return state.selectpronlist
    }
}
const mutations = {
    muactionhomebannerlist(state,params) {
        state.selectbannerlist = params
    },
    muactionhomepronlist(state, params) {
        state.selectpronlist = params
    }
}
const actions = {
    actionhomebannerlist(comt,paramsId) {
        axios.get(HOME_BANNERLIST)
        .then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                let selectData = res.data.data.find(item => item.id === paramsId);
                let { bannerList } = selectData;
                bannerList = bannerList.map(({ picUrl }) => ({ picUrl }));
                comt.commit("muactionhomebannerlist", bannerList);
            }
        })
        .catch((err) => {
            console.log(err)
        })
            
    },
    actionhomepronlist(comt, paramsId) {
        if(paramsId === -1)return
        axios.get(HOME_PRONLIST)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let selectData = res.data.data.find((item) => {
                        return item.find((item) => {
                            return item.category.superCategoryId === paramsId
                        })
                    });
                    selectData = selectData.map(({ category: { name, frontName, superCategoryId }, itemList }) => ({ category: { name, frontName, superCategoryId }, itemList}))
                    selectData = selectData.map((item) => {
                        return {
                            category: item.category,
                            itemList: item.itemList.map(({ counterPrice, id, listPicUrl, name, promTag, retailPrice, simpleDesc, tagCnts }) => ({ counterPrice, id, listPicUrl, name, promTag, retailPrice, simpleDesc, tagCnts}))
                        }
                    })
                    comt.commit("muactionhomepronlist", selectData);
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