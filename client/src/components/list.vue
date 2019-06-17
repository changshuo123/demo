<template>
    <li class="item-li" @click="goDetail(curobj.list_type,curobj.applicationNumber)">   
        <div>
            <div class="li-title">
                <span>{{curobj.applicationNumber}}</span>
                <span>待审批</span>
            </div>
            <div class="li-info">
                <div>
                    <div>
                        <span>申请人</span>
                        <span>{{curobj.nickname}}</span>
                    </div>
                    <div>
                        <span>加班类型</span>
                        <span>工作日加班</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>加班日期</span>
                        <span>{{curobj.startTime}}</span>
                    </div>
                    <div>
                        <span>加班时数</span>
                        <span>CIC</span>
                    </div>
                </div>
            </div>
        </div> 
    </li>
</template>
<script>
export default {
    props:{
        curobj:Object
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
        goDetail(type,id){
            // console.log('/detail'+'/'+type+'/'+id)
            this.$router.push('/detail'+'/'+type+'/'+id)
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
.item-li{
    width:100%;
    height:pxTorem(120px);
    border-bottom: 20px solid #eee;
}
.item-li>div{
    width:100%;
    height:100%;
    padding:0 20px;
    box-sizing: border-box;
}
.li-title{
    width:100%;
    height:pxTorem(40px);
    font-size: pxTorem(16px);
    display:flex;
    justify-content: space-between;
    align-items: center;
    span{
        color:#ccc;
        font-size: 26px;
    }
}
.li-info{
    width:100%;
    display:flex;
    >div{
        width:50%;
        margin-bottom: pxTorem(5px); 

        >div{
            display:flex;
            margin-bottom: pxTorem(10px);
            >span{
                font-size: pxTorem(14px); 
            }
            >span:nth-child(1){
                width:180px;
            }
        }
    }
    >div:nth-child(2){
        margin-left: pxTorem(20px); 
    }
}
</style>