import http from "@utils/request";



//shopping页接口
export const shoppingApi = () => http({
    method: "get",
    url: "/Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api",
    data: {
        t: 2019111221483746726,
    }
})

//列表页接口
export const shoppingmowanApi = (categoryId1="") => http({
    method: "get",
    url: "/Service/callback-mall.mi/ECommerce/SearchGoods.api?",
    data: {
        categoryId1:categoryId1,

    }
})

export const shoppingmowanwenziApi = (keyword="") => http({
    method: "get",
    url: "/Service/callback-mall.mi/ECommerce/SearchGoods.api?",
    data: {
        keyword:keyword,

    }
})

export const urlnullApi = () => http({
    method: "get",
    url: "/Service/callback-mall.mi/ECommerce/SearchGoods.api?",
})

//详情页接口
export const shoppingdetailApi = (goodsId) => http({
    method: "get",
    url: "/Service/callback-mall.mi/product/detail.api?",
    data: {
        goodsId,
    }
})


//-------------------------------------------------------------