<template>
    <transition name='fade'>
    <div class="dask" :class="{'show':dialogflag==true}" @click.stop="clickdask()">
        <transition name="slideto">
        <div class="dialog" @click.stop>
            <div>
                <router-link to="/apply/overtime">
                    <span></span>
                    <span>加班</span>
                </router-link>
                <router-link to="/apply/vacation">
                    <span></span>
                    <span>休假</span>
                </router-link>
            </div>
        </div>
    </transition>
    </div>
    </transition>

</template>
<script>
export default {
    props:{
        dialogflag:Boolean,
        clickdask:Function
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
@import '../../static/font/iconfont.css'; 
@import '../../static/_minix.scss';
@import '../../static/common.scss';

.dask{
    display:none;
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: rgba(0,0,0,.6);
}
.dialog{
    display:none;
    width:100%;
    height:pxTorem(150px);
    background: #fff;
    position: absolute;
    left:0;
    bottom: 0;
    display:flex;
    @extend %juzhong;
    >div{
        width:pxTorem(180px);
        height:pxTorem(50px);
        display:flex;
        justify-content: space-between;
        >div{
            width:pxTorem(50px);
            height:pxTorem(50px);
            border:1px solid #ccc; 
        }
        
    }
}
.show{
    display:block!important;
}
.fade-enter,.fade-leave-to{
    opacity:0;
}
.fade-enter-active,.fade-leave-active{
    transition:opacity 2s;
}
.fade-enter-to,.fade-leave{
    opacity:1
}
</style>