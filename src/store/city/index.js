import { cityApi } from '@api/city';
let state = {
    hotList: JSON.parse(sessionStorage.getItem("hotList"))||[],
    cityList: JSON.parse(sessionStorage.getItem("cityList"))||[],
    n:sessionStorage.getItem("cityN")||"北京",
    cityId:sessionStorage.getItem("cityId")||290
}

let actions = {
    async handleGetCityList({ commit }) {
        let data = await cityApi();
        commit("handleCityList", data.p)
    }
}

let mutations = {
    handleCityList(state, cities) {
        let hotCity = [], cityList = [];
        /*
                hotCity = [
                    {
                        id: "",
                        n: ""
                    }
                ]
                cityList = [
                    index: "A",
                    list: [
                        id:"",
                        n:""，
                        py：""
                    ]
                ]
        */
        //热门城市
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].count >= 130) {
                hotCity.push({ id: cities[i].id, n: cities[i].n });
            }
        }

        //城市列表
        for (var j = 0; j < cities.length; j++) {
            let letterFirst = cities[j].pinyinFull.slice(0, 1).toUpperCase();
            if (isCityList(letterFirst)) {
                //不存在
                cityList.push({ index: letterFirst, list: [{ id: cities[j].id, n: cities[j].n, pinyinFull: cities[j].pinyinFull }] })
            } else {
                //存在

                for (var m = 0; m < cityList.length ; m++) {
                    if (cityList[m].index == letterFirst) {
                        cityList[m].list.push({ id: cities[j].id, n: cities[j].n, pinyinFull: cities[j].pinyinFull });
                    }
                }
            }
        }
        //判断城市标识是否在citylist中
        function isCityList(letterFirst) {
            var bStop = true;
            for (var n = 0; n < cityList.length; n++) {
                if (cityList[n].index == letterFirst) {
                    bStop = false;
                    break;
                }
            }
            return bStop;
        }
        //A-Z排序
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })
        state.hotList = hotCity;
        state.cityList = cityList;
        //放入sessionStorage中缓存
        sessionStorage.setItem("hotList",JSON.stringify(hotCity));
        sessionStorage.setItem("cityList",JSON.stringify(cityList));
    },
    handleUpdateCityInfo(state,city){
        console.log(city);
        state.cityId=city.id;
        state.n = city.n;
        sessionStorage.setItem("cityId",city.id);
        sessionStorage.setItem("cityN",city.n);
    }
}

let getters = {

}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
}