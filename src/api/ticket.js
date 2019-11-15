import http from '@utils/request'
/*
购票页面请求数据    根据城市ID
*/
export const ticketlistApi = (loactionId)=>http({
    method:"get",
    url:"/api/proxy/ticket/onlineCinemasByCity.api",
    data:{
        locationId:loactionId,
        _:1573567717805
    }
})


/**
 * 购票页面 商家详情信息
 */

 export const detailsmovieApi = (cinemaId) =>http({
     method:"get",
     url:"/cinema/showtime.api",
     data:{
        t:2019111416434211298,
        cinemaId:cinemaId
     }
 })
