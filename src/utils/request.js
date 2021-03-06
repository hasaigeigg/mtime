import axios from 'axios';
import loading from '../lib/loading/index';
const server = axios.create({
    timeout:5000,
    // baseUrl:"",
    withCredentials:true
})

//请求拦截
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }

    loading.createLoading(); 
    return config;
},(err)=>{
    return Promise.reject(err);
})

//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){

        loading.destroyLoading();
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})

export default server;