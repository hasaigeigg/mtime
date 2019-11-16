import http from "@utils/request"

/*
*   发现 新闻顶部接口 用Service接口
*/
// http://m.mtime.cn/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=201911131182097049
export const findnewtitleApi = () => http({
    method: "get",
    url: "/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api",
    data: {
        t: 201911131182097049
    }
})


/**
 *  发现栏下面 新闻接口     pageInde代表当前页
 */
export const findnewcontentApi = (pageIndex = 1) => http({
    method: "get",
    url: "/Service/callback.mi/News/NewsList.api",
    data: {
        t: 2019111313235675352,
        pageIndex: pageIndex
    }
})

/**
 * 发现栏下面 预告接口  param变化了数据不会变 暂时无用
 * https://ticket-api-m.mtime.cn/discovery/trailerList.api?t=2019111319403522793&param=1
 */
export const findyugaocontentApi = (param=1) => http({
    method: "get",
    url: "/discovery/trailerList.api",
    data: {
        t:2019111317375916239,
        param:param
    }
})

/**
 * 发现栏下面 排行接口  pageIndex代表页数 点击查看更多可以触发
 */
export const findpaicontentApi = (pageIndex=1) => http({
    method:"get",
    url:"/Service/callback.mi/TopList/TopListOfAll.api",
    data: {
        t : 2019111313275341461 ,
        pageIndex:pageIndex
    }
})

/**
 * 发现栏下面 影评接口  
 */
export const findyingcontentApi =()=>http({
    method:"get",
    url:"/Service/callback.mi/MobileMovie/Review.api",
    data:{
        needTop:false,
        t:2019111313283081570
    }
})