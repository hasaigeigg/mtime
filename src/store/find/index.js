import {findnewtitleApi} from '@api/find';


let state = {
    Findnew:[],
    Findreview:[],
    Findtoplist:[],
    Findtrailer:[]
}

let actions = {
    async handleFindTitle({commit}) {
        let data = await findnewtitleApi();
        commit("handleFindMtitle",data);
      },
}

let mutations = {
    handleFindMtitle(state,data){
        state.Findnew = data.news;
        state.Findreview = data.review;
        state.Findtoplist = data.topList;
        state.Findtrailer = data.trailer;
    }
}

let getters = {

}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}