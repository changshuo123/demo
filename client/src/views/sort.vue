<template>
    <div class="wrap">
        <header class="header">
            <div>排序</div>
        </header>
        <main class="main">
            <div>
                <h3>按发起时间排序</h3>
                <div class="sort-btns">
                    <span>按时间倒序</span>
                    <span>按时间顺序</span>
                </div>
            </div>
            <div>
                <h3>按发起时间排序</h3>
                <div class="sort-btns">
                    <span>按日期倒序</span>
                    <span>按日期顺序</span>
                </div>
            </div>
            <div>
                <h3>按发起时间排序</h3>
                <div class="sort-btns">
                    <span>按时数倒序</span>
                    <span>按时数顺序</span>
                </div>
            </div>
        </main>
        <footer class="footer">
            <span>返回</span>
            <span>确认</span>
        </footer>
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
    display:flex;
    margin-bottom: pxTorem(40px);
}
.header>div{
    flex:1;
    @extend %juzhong;
    font-size: 30px;
}
.main{
    flex:1;
    width:100%;
    >div{
        width:100%;
        height:pxTorem(90px);
        padding:0 20px;
        box-sizing: border-box;

        h3{
            width:100%;
            height:pxTorem(40px);
            line-height:pxTorem(40px);
            font-size: 26px;
        }
    }
}
.sort-btns{
    display:flex;
    justify-content: space-between;
     span{
        width:48%;
        height:pxTorem(30px);
        background:#eee; 
        @extend %juzhong;
        font-size: 24px;
        border-radius: 5px;
    }
}
.footer{
    width:100%;
    height:pxTorem(50px);
    border-top: 2px solid #ccc;
    display:flex;
    span{
        font-size: 30px;
    }
    span:nth-child(1){
        width:35%;
        @extend %juzhong;
        background: #fff;
        color:#0b6242;
    }
    span:nth-child(2){
        width:65%;
        @extend %juzhong;
        background: #0b6242;
        color:#fff;
    }
}
</style>