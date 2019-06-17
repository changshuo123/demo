<template>
    <div class="wrap">
        <Header />
        <Nav @change="tableMenu"/>
        <main class="main">
            <Typetab @changeType="TypetabType"/>
            <Container :curlist="curlist"/>
            <div class="go-btn" @click="clickBtn()">+发起请求</div>
        </main>
        <BuilDialog :dialogflag="dialogflag" :clickdask="clickdask"/>
    </div>
</template>
<script>
import api from '@/api'
import List from '../components/list'
import Typetab from '../components/typetab'
import Container from '../components/container'
import BuilDialog from '../components/home/buildDialog'
import {mapActions} from 'vuex'
console.log(api.getList)
export default {
    name:'home',
    props:{

    },
    components:{
        List,
        Typetab,
        Container,
        BuilDialog
    },
    data(){
        return {
            curlist:[],
            dialogflag:false,
            dataOptions:{
                page:1,
                pageSize:10,
                create_at:0,
                type:'overtime',
                status:0
            }
        }
    },
    computed:{

    },
    methods:{
        ...mapActions('user',["getUserInfo"]),
         clickBtn(){
            this.dialogflag = true
        },
        clickdask(){
            this.dialogflag = false
        },
        getTasklist(){
            api.getList(this.dataOptions).then(res=>{  //请求列表数据
                this.curlist = res.data
            })
        },
        tableMenu(status){
            this.dataOptions.status = status
            this.getTasklist()
        },
        TypetabType(type){
            this.dataOptions.type = type
            this.getTasklist()
        }
    },
    created(){
        // request.get("/api/user/info").then(res=>{
        //     console.log(res)
        // })
        this.getUserInfo() //验证用户是否登录
        this.getTasklist() //请求列表数据
        
    },
    mounted(){

    }
}
</script>
<style lang="scss">
@import '../static/font/iconfont.css'; 
@import '../static/_minix.scss';
@import '../static/common.scss';

%juzhong{
    display:flex;
    justify-content: center;
    align-items: center;
}
.main{
    flex:1;
    width:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}


.go-btn{
    width:pxTorem(160px);
    height:pxTorem(50px);
    background: #0b6242;
    position: fixed;
    bottom:pxTorem(30px);
    right:pxTorem(20px);
    border-radius: pxTorem(30px);
    text-align: center;
    line-height: pxTorem(50px);
    font-size: 30px;
    color:#fff;
}



</style>