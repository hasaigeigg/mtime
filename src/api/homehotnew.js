import http from "@utils/request"

/**
 * 首页热点新闻接口
 */

 export const  homehotnewApi = (relateId) => http ({
     method:"get",
     url:"/utility/share.api",
     data:{
        type:116,
        relateId:relateId
     }
 })