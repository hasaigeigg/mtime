import http from '@utils/request'

export const cityApi = () =>http({
    method:"get",
    url:"/api/proxy/ticket/Showtime/HotCitiesByCinema.api",
})