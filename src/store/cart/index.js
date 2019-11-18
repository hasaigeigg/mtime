import { shopgoodsdetailApi } from '@api/shopgoods'

let state = {
    content: [],
    spice: 0,
    num: 1,
    value: false
}

let actions = {
    async handleCartConent({ commit }, params) {
        let data = await shopgoodsdetailApi(params.id, params.city);
        commit("handleCartMutations", data.data.productDetail.goods)
    }
}

let mutations = {
    handleCartMutations(state, content) {
        state.content = content;
        console.log(content);
    },
    handleCartReducer(state) {
        if (state.num <= 1) {
            state.state.num = 1;
            content.status = 1;
            alert("已减至最小值");
        } else {
            state.content.status--;
            state.num--;
            if (state.value) {
                state.spice = state.num * (state.content.txnSalePrice / 100)
            } else {
                state.spice = 0;
            }
        }
    },
    handleCartAdd(state) {
        state.content.status++;
        state.num++;
        if (state.value) {
            state.spice = state.num * (state.content.txnSalePrice / 100)
        } else {
            state.spice = 0;
        }
    },
    handleCartPrice(state) {
        state.value = !state.value;
        if (state.value) {
            state.spice = state.num * (state.content.txnSalePrice / 100)
        } else {
            state.spice = 0;
        }
    },
        
}

let getters = {
    num() {
        handleCartPrice();
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
}

