<template>
    <div class="main-top">
        <div></div>
        <div>
            <div class="main-tab">
                <span v-for="(item,index) in tablist" :key="index" 
                :class="{'active':tabindex==index}"
                @click="change(index,item.type)"
                >{{item.title}}</span>

            </div>
        </div>
        <div class="change">
            <span class="iconfont icon-faxian"></span>
            <span class="iconfont icon-faxian"></span>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            tabindex:0,
            tablist:[
                {
                    title:'加班',
                    type:'overtime'
                },
                {
                    title:'休假',
                    type:'vacation'
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        change(index,type){
            this.tabindex = index
            this.$emit("changeType",type)
        }
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
.main-top{
    width:100%;
    height:pxTorem(50px);
    padding: pxTorem(10px) 0 0 0;
    display: flex;
    >div:nth-child(1),>div:nth-child(3){
        flex:1;
        height:100%;
    }
    >div:nth-child(2){
        width:pxTorem(180px)!important;
        display:flex;
        span{
            width:50%;
            height:pxTorem(30px);
        }
    }
}
.main-tab{
    width:100%;
    height:pxTorem(30px);
    border:1px solid #0b6242;
    border-radius: pxTorem(30px);
    overflow: hidden;
    margin-top: pxTorem(10px);
    display:flex;
    >span{
        width:50%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: pxTorem(16px);
    }
}
.change span.iconfont{
    float:right;
    font-size: 50px;
    margin-top:pxTorem(10px);
    margin-right: 20px;
}
.container,.container ul{
    width:100%;
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
.active{
    background: #0b6242;
}
</style>