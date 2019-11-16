import http from '@utils/request'

export const LoginApi = (username,password) =>http({
    method:"post",
    url:"/users/login",
    data:{
        username:username,
        password:password
    }
})

export const ZhuceApi = (username,password) =>http({
    method:"post",
    url:"/users/register",
    data:{
        username:username,
        password:password
    }
})