<template>
    <div class="imgboxinfo">
        <div class="add-img">
            <ul>
                <li v-for="(item,index) in pics" :key="index">
                    <img :src="'http://localhost:3000'+item"/>
                </li>
                <li v-show="addPicbtn">
                    <div class="filebox">
                        <i class="iconfont icon-faxian"></i>
                        <input type="file" multiple="multiple" @change="addpic($event)" ref="filebtn"> 
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import api from '@/api'
import Isfile from '../../utils/isfile'
export default {
    props:{
        addPicbtn:Boolean,
        pics:Array
    },
    methods:{
        addpic(e){
            let userfile = this.$refs.filebtn.files[0] //js对象
            console.log(userfile)
            let isCheck = new Isfile(userfile,{
                type:['jpg','png','gif','jpeg'],
                size:3 //MB KB
            })
            if(isCheck.isType() && isCheck.isSize()){
                const formdata = new FormData()  //html5 新增的一个api 在window对象上 把向ajax发送的数据变成键值对形式的
                formdata.append('file',userfile)
                // console.log(formdata)
                //发起请求
                api.commitFile(formdata).then(res=>{
                    console.log(res)
                    this.$emit('sendimg',res.url)
                })
            }else{
                alert('文件不符合规则')
            }
        }
    },
}
</script>
<style scoped lang="scss">
@import '@/static/detail.scss';
.add-img{
    ul{
        display:flex;
    }
    position:relative;
    input{
        width:pxTorem(70px);
        height:pxTorem(60px);
        opacity:0;
        position:absolute;
        left:0;
        top:0;
    }
}
.filebox{
    position: relative;
    width:pxTorem(70px);
    height:pxTorem(60px);
    border:1px solid #ccc;
    @extend %juzhong;
    i.iconfont{
        font-size: pxTorem(40px);
    }
}
</style>

