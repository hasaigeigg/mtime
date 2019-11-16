import http from "@utils/request";


//电影热映接口
export const movieHotApi = (locationId=490) => http({
    method: "get",
    url: "/Service/callback.mi/Showtime/LocationMovies.api",
    data: {
        locationId,
        t:20191116928231405,
    }
})

//电影即将上映接口
export const movieComingApi = (locationId=490) => http({
    method: "get",
    url: "/Service/callback.mi/Movie/MovieComingNew.api",
    data: {
        locationId,
        t:20191116928231405,
    }
})

//电影正在热映详情接口 

export const movieDetailApi = (movieId=263446) => http({
    method: "get",
    url: "/Service/callback.mi/movie/Detail.api",
    data: {
        movieId,
    }
})

//电影即将上映详情接口

export const movieComingDetailApi = (movieId=261864) => http({
    method: "get",
    url: "/Service/callback.mi/movie/Detail.api",
    data: {
        movieId
    }
})


// /Service/callback.mi/Movie/MovieComingNew.api