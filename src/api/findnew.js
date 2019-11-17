import http from "@utils/request"

/**
 * 发现 新闻 详情页
 */

 export const findnewdetailApi = (newsId) => http({
     method:"get",
     url:"/news/detail.api",
     data:{
        newsId:newsId
     }
 })