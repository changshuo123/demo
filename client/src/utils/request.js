import axios from 'axios'
import router from '../router/index'
const request = axios.create({
    baseURL:' http://localhost:3000',
    timeout:1000   
})

//请求之前拦截器
request.interceptors.request.use((config)=>{ //请求成功时
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    }
},(error)=>{ //请求失败时 
    return Promise.reject(error)
})

//相应之前拦截器
request.interceptors.response.use((response)=>{
    // console.log(response)
    return response.data
},(error)=>{
    const response = error.response;
    const status = response.status;
    // console.log(status)
    if(status>400){
        switch(status){
            case 401:  //未登录
                router.push('/login');
                break
            case 403:
                alert("没有权限")
                break;
            case 404:
                alert("页面走丢了")
                break;
        }
    }
    return Promise.reject(error)
})

export default {
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
};