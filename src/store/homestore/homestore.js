import axios from "axios";
const state = {
    homedata: [],
    homebanner: [],
    homexieyi: [],
    homexinpinchishiji: [],
    homechaozhi: [],
    Homescrolllistdata: [],
    Homeqianggoudata: [],
    Homexinpinshoufadata: [],
    Homerenqituijiandata:[]
}
const getters = {
    senddata(state) {
        return state.homedata
    },
    sendhomebannerdata(state) {
        return state.homebanner
    },
    sendhomexieyidata(state) {
        return state.homexieyi
    },
    sendhomechushijidata(state) {
        return state.homexinpinchishiji
    },
    gethomechaozhidata(state) {
        return state.homechaozhi
    },
    gethomescrolllistdata(state) {
        return state.Homescrolllistdata
    },
    gethomeqianggoudata(state) {
        return state.Homeqianggoudata
    },
    gethomexinpinsoufadata(state) {
        return state.Homexinpinshoufadata
    },
    gethomerenqituijianadata(state) {
        return state.Homerenqituijiandata
    }
}
const mutations = {
    updatedHomedata(state, params) {
        state.homedata = params;
    },
    updatedHomebannerdata(state, params) {
        
        state.homebanner = params;
    },
    updatedHomexieyidata(state, params) {
        
        state.homexieyi = params;
    },
    updatedHomexinpinchishijidata(state, params) {

        state.homexinpinchishiji = params;
    },
    updatedHomechaozhidata(state, params) {

        state.homechaozhi = params;
    },
    mutationHomescrolllistdata(state, params) {

        state.Homescrolllistdata = params;
    },
    mutationHomeqianggoudata(state, params) {

        state.Homeqianggoudata = params;
    },
    mutationHomexinpinshoufadata(state, params) {

        state.Homexinpinshoufadata = params;
    },
    mutationHomerenqituijiandata(state, params) {

        state.Homerenqituijiandata = params;
    }
}
const actions = {
    requerydata(commit,params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ id, name }) => ({ id, name }));
                    data.splice(0,0,{id:-1,name:"推荐"})
                    commit.commit("updatedHomedata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    requeryHomeSwiperdata(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ id, picUrl }) => ({ id, picUrl }));
                    
                    commit.commit("updatedHomebannerdata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    xieYiAction(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ desc, icon }) => ({ desc, icon }));
                    
                    commit.commit("updatedHomexieyidata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    homeXinPinChuShiJiAction(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ picUrl, text }) => ({ picUrl, text }));
                    commit.commit("updatedHomexinpinchishijidata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    getHomeChaoZhiData(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map((item) => (item.styleItem));
                    data = data.map(({ desc, title, picUrlList }) => ({ desc, title, picUrlList }));
                    
                    commit.commit("updatedHomechaozhidata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    homescrolllostaction(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ id, name, retailPrice, primaryPicUrl }) => ({ id, name, retailPrice, primaryPicUrl}));
                    
                    
                    commit.commit("mutationHomescrolllistdata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    actionhomeqianggou(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ itemId, showPicUrl, activityPrice, originPrice }) => ({ itemId, showPicUrl, activityPrice, originPrice }));
                    
                    commit.commit("mutationHomeqianggoudata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    actionhomexinpinsoufa(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ id, name, counterPrice, primaryPicUrl }) => ({ id, name, counterPrice, primaryPicUrl }));
                    data = data.splice(0,data.length-2)
                    commit.commit("mutationHomexinpinshoufadata", data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    actionhomerenqituijian(commit, params) {
        axios.get(params)
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    let data = res.data.data.map(({ id, name, simpleDesc, counterPrice, primaryPicUrl }) => ({ id, name, simpleDesc, counterPrice, primaryPicUrl }));
                    
                    commit.commit("mutationHomerenqituijiandata", data);
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