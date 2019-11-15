import http from "@utils/request"

/*
*   首页热映接口
*/
export const homereApi = (locationId) => http({
    method: "get",
    url: "Service/callback.mi/Showtime/LocationMovies.api",
    data: {
        locationId: locationId,
        t: 2019111219134334991
    }
})
/**
 * 首页热点接口
 */
export const homecontentApi = () => http({
    method: "get",
    url: "/article/originalInfoList.api",
    data: {

    }
})

