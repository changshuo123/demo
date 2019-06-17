import api from '@/api'
console.log(api.islogin)
export default {
    namespaced:true,
    state:{
        userinfo:{}
    },
    mutations:{
        setuser(state,data){
            state.userinfo = data
            console.log(state.userinfo)
        }
    },
    actions:{
        getUserInfo(context){
            api.islogin().then(res=>{
                context.commit('setuser',res.data)  //将登录信息赋给userinfo
            })
        }
    }
}