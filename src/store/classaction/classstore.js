import axios from "axios";
const state = {
    classLeftNavData: [],
    classBannerListData: [],
    classRightListData: [],
    selectIndex:0
}
const getters = {
    getclassLeftNavData(state) {
        return state.classLeftNavData
    },
    getclassBannerListData(state) {
        return state.classBannerListData
    },
    getclassRightListData(state) {
        return state.classRightListData
    }
}
const mutations = {
    muactionSelectIndex(state,params) {
        state.selectIndex = params
    },
    mutationLeftData(state,params) {
        state.classLeftNavData = params;
    },
    mutationBannerListData(state, params) {
        state.classBannerListData = params;
    },
    mutationRightListData(state, params) {
        state.classRightListData = params;
    }
}
const actions = {
    classActionLeftData(cmit,params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let leftData = res.data.data.map(({ id, name, bannerUrl, subCateList }) => ({ id, name, bannerUrl, subCateList}))
                    cmit.commit("mutationLeftData", leftData);
                }
            })
            .catch((err) => {
            console.log(err)
        })
    },
    actionclassbannerlist(cmit, params) {
        axios.get(params[0])
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let leftData = res.data.data[params[1]].map(({ id, picUrl }) => ({ id, picUrl }));
                    cmit.commit("mutationBannerListData", leftData);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    classActionRightData(cmit, params) {
        axios.get(params[0])
            .then((res) => {
                if (res.status === 200 && res.data.code === 0 && params[1] <= 3) {
                    let leftData = res.data.data[params[1]].map((item) => (item.categoryList));
                    leftData = leftData.map((item) => {
                        return item.map(({ bannerUrl, id, name }) => ({ bannerUrl, id, name }))
                    })
                    console.log(leftData)
                    cmit.commit("mutationRightListData", leftData);
                } else {
                    let leftData = res.data.data[params[1]].map(({ categoryList, name,id }) => ({ categoryList, name,id }));
                    console.log(leftData)
                    cmit.commit("mutationRightListData", leftData);
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