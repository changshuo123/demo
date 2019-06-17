<template>
    <div class="wrap">
        <Header />
        <div class="login-title">
            <div>欢迎来到星想俱乐部</div>
        </div>
        <div class="container">
            <div>
                <input type="text" placeholder=" 手机号码" v-model="user">
            </div>
            <div>
                <input type="password" placeholder=" 验证码" v-model="pwd">
            </div>
            <div>
                <button class="btn" @click="clickFn()">登录/注册</button>
                <p class="dialog-txt">使用账号密码登录</p>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api'
import data from '../../../../日考/week1/src/mock/mock';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:'',
            pwd:'',
            phoneReg:/^1[3456789]\d{9}$/
        }
    },
    computed:{
       
    },
    methods:{
        clickFn(){
            console.log(this.user,this.pwd)
            if(this.pwd.trim() !== '' && this.phoneReg.test(this.user)){
                api.userLogin({
                    phone:this.user,
                    password:this.pwd
                }).then(data=>{
                    let {token} = data;
                    window.localStorage.setItem('token',token)
                    this.$router.back()
                }).catch((error)=>{
                    console.log(error)
                    // alert(error.response.data.message)
                })
            }else{
                alert('密码和手机号输入有误')
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../static/_minix.scss';
@import '../static/common.scss';
.wrap{
    width:100%;
    height:100%;
}
.login-title{
    width:100%;
    height:pxTorem(50px);
    border-bottom:pxTorem(4px) solid #ccc;
    font-size: 40px;
    line-height: pxTorem(50px);
    >div{
        padding:0 20px;
        box-sizing: border-box;
    }
}
.container{
    width:100%;
    padding:0 20px;
    box-sizing: border-box;
    >div{
        width:100%;
        height:pxTorem(50px);
        input{
            width:90%;
            height:pxTorem(30px);
            margin-top: pxTorem(20px);
            margin-left:5%;
        }
    }
    >div:nth-child(1),>div:nth-child(2){
        border-bottom: 1px solid #ccc;
    }
}
.btn{
    width:100%;
    height:pxTorem(40px);
    margin-top: pxTorem(80px);
    border-radius: pxTorem(40px);
    border: 0;
    background: #ccc;
    font-size: pxTorem(16px);
    color:#fff;
}
.dialog-txt{
    margin-top: pxTorem(50px);
    text-align: center;
    font-size: pxTorem(14px);
    color:#0b6242;
}
</style>