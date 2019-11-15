import http from "@utils/request"

/**
 * 搜索 电影接口
 *  keyword搜索关键字
 *  loactionId城市Id
 */

export const SoumovieApi = (keyword,loactionId)=>http({
    method:"get",
    url:"Service/callback.mi/Search/SearchSuggestionNew.api",
    data:{
        keyword:keyword,
        loactionId:loactionId
    }
})

/**
 * 搜索 热门内容
 */
export const SoumoviehotApi = ()=>http({
    method:"get",
    url:"Service/callback.mi/Search/HotKeyWords.api",
    data:{

    }
})