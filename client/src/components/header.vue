<template>
    <header class="header">
        <div>
            <span @click="$router.back()" v-if="back">
                <span class="iconfont icon-faxian"></span>
            </span>
        </div>
        <div class="header-title"><b>{{title ? title : $route.meta.title}}</b></div>
        <div class="header-r">
             <span class="iconfont icon-faxian" v-if="timerbtn"></span>
            <span class="iconfont icon-faxian" v-if="searchbtn"></span>
        </div>
    </header>
</template>
<script>
export default {
    props:{
        back:{
            default:true
        },
        title:{
            default:''
        },
        timerbtn:{
            default:true
        },
        searchbtn:{
            default:true
        }
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../static/font/iconfont.css'; 
@import '../static/_minix.scss';
@import '../static/common.scss';
%juzhong{
    display:flex;
    justify-content: center;
    align-items: center;
}
.header{
    width:100%;
    height:pxTorem(50px);
    padding:0 30px;
    box-sizing: border-box;
    display:flex;

    >div{
        @extend %juzhong;
    }
    >div:nth-child(1){
        width:pxTorem(70px);
        justify-content: flex-start;
    } 
    >div:nth-child(2){
        flex:1;
        width:pxTorem(300px);
    }
    >div:nth-child(3){
        width:pxTorem(70px);
        justify-content: flex-end;
    }  
}

span.iconfont{
    font-size:50px;
}
.header-title{
    font-size: 30px;
}
.header-r{
    display:flex;
    justify-content:flex-end;
    >span:nth-child(1){
        margin-left: pxTorem(30px);
    }
    >span:nth-child(2){
        margin-left: pxTorem(10px);
    }
}

</style>