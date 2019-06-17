<template>
    <nav class="nav">
        <div v-for="(item,index) in navlist" :key="index" :class="{active:tabindex==index}" @click="change(index,item.status)">
            <span :class="'iconfont '+item.icon"></span>
            <span>{{item.title}}</span>
        </div>
        
    </nav>
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
            navlist:[
                {
                    title:'待处理',
                    icon:'icon-faxian',
                    status:0
                },
                {
                    title:'已发起',
                    icon:'icon-faxian',
                    status:1
                },
                {
                    title:'已处理',
                    icon:'icon-faxian',
                    status:2
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        change(index,status){
            this.tabindex = index
            this.$emit('change',status)
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
%juzhong{
    display:flex;
    justify-content: center;
    align-items: center;
}
.nav{
    width:100%;
    height:pxTorem(80px);
     box-shadow: 0px 20px 20px  #eee;
    display:flex;
    >div{
        flex:1;
        height:100%;
        @extend %juzhong;
        flex-direction: column;

        >span.iconfont{
            font-size: 50px;
            margin-bottom: pxTorem(5px);
        }
    }
}
.active{
    color:#0b6242;
}

</style>