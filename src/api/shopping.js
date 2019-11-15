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
export const shoppingmowanApi = () => http({
    method: "get",
    url: "/Service/callback-mall.mi/ECommerce/SearchGoods.api?",
    data: {
        t: 201911131241323507,
        pageIndex:1,
        sf:0,
        sm:2,
        topicId:0,
        movieId:0,
        roleId:0,
        categoryId1:25,
       
    }
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