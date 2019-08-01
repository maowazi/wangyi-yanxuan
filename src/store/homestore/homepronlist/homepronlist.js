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
                let bannerlistdata = bannerList.map(({ picUrl }) => ({ picUrl }));
                comt.commit("muactionhomebannerlist", bannerlistdata);
            }
        })
        .catch((err) => {
            console.log(err)
        })
            
    },
    actionhomepronlist(comt, paramsId) {
        axios.get(HOME_PRONLIST)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    // let newData = res.data.data.map((item) => {
                    //     return {
                    //         superCategoryId: item.map((item) => { return item.category.superCategoryId })[0],
                    //         title: item.map((item) => { return item.category.name }),
                    //         frontDesc: item.map((item) => { return item.category.frontDesc }),
                    //         id: item.map((item) => { return item.itemList.map((item) => { return item.id }) }),
                    //         titleName: item.map((item) => { return item.itemList.map((item) => { return item.name }) }),
                    //         simpleDesc: item.map((item) => { return item.itemList.map((item) => { return item.simpleDesc }) }),
                    //         retailPrice: item.map((item) => { return item.itemList.map((item) => { return item.retailPrice }) }),
                    //         counterPrice: item.map((item) => { return item.itemList.map((item) => { return item.counterPrice }) }),
                    //         tagCnts: item.map((item) => { return item.itemList.map((item) => { return item.tagCnts }) }),
                    //         listPicUrl: item.map((item) => { return item.itemList.map((item) => { return item.listPicUrl }) }),

                    //     }
                    // })
                    // console.log(newData)
                    // comt.commit("muactionhomepronlist", newData);


                    // let pronlist,data = [];
                    console.log(res)
                    let selectData = res.data.data.find((item) => {
                        return item.find((item) => {
                            return item.category.superCategoryId === paramsId
                        })
                    });
                    
                    // data = selectData.map(({ category: { frontDesc, frontName, name } }) => ({ category: { frontDesc, frontName, name } }));
                    // pronlist = selectData.map(({ itemList }) => ({ itemList }))
                    // pronlist = pronlist.map((item) => {
                    //     return item.itemList.map(({ name, simpleDesc, retailPrice, counterPrice, tagCnts }) => ({ name, simpleDesc, retailPrice, counterPrice, tagCnts}))
                    // })
                    // console.log(pronlist)
                    comt.commit("muactionhomepronlist", selectData );
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