<template>
    <div class="wrap">
        <div class="top">
           <Header :timerbtn="false" :searchbtn="false" :title="type=='overtime'?'办公室加班申请表':'办公室休假申请表'"/> 
           <div class="employee-info">
                <div class="imgbox">
                    <img :src="userinfo.avatar" />
                </div>
                <div class="employee-info-r">
                    <div><span>申请人姓名</span><span>{{detailobj.nickname}}</span></div>
                    <div><span>直接主管</span><span>王双全</span></div>
                    <div><span>申请单号</span><span>王双全</span></div>
                    <div><span>发起时间</span><span>{{detailobj.endTime}}</span></div>
                </div>
                <div>
                    <i>></i>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="apply-info">
                <h3 class="h3box">
                    <div>申请信息</div>
                </h3>
                <div class="mess">
                    <p><span>加班日期</span><span>{{startdate}}</span></p>
                    <p><span>加班类型</span><span>双休日加班</span></p>
                    <p><span>加班起始时间</span><span>{{startdate}}</span></p>
                    <p><span>加班截至时间</span><span>{{enddate}}</span></p>
                    <p><span>共计时数</span><span>{{alltimer}}</span></p>
                </div>
            </div>
            <div class="overtime-info">
                <h3 class="h3box">
                    <div>加班事由</div>
                </h3>
                <div class="mess">
                    <p>asdasjdiasjd</p>
                </div>
            </div>
            <div class="file-info">
                <h3 class="h3box">
                    <div>附件</div>
                </h3>
                <div class="imgboxinfo">
                   <img v-for="(item,index) in detailobj.annex" :key="index" :src="`http://localhost:3000${item}`" alt="">
                </div>
            </div>
        </div>
        <footer class="footer">
            <div>
                <i class="iconfont icon-faxian"></i>
                <span>审批历史</span>
            </div>
            <div>返回</div>
            <div>同意</div>
        </footer>
    </div>
</template>
<script>
import api from '@/api'
import {mapState} from 'vuex'
export default {
    props:{
        type:String,
        id:String
    },
    components:{

    },
    data(){
        return {
            detailobj:{}
        }
    },
    computed:{
        ...mapState('user',["userinfo"]),
        startdate(){
            let newdate = new Date(this.detailobj.startTime)
            let year = newdate.getFullYear()
            let month = newdate.getMonth()
            let date = newdate.getDate()
           return `${year}-${month}-${date}`
        },
        enddate(){
            let newdate = new Date(this.detailobj.endTime)
            let year = newdate.getFullYear()
            let month = newdate.getMonth()
            let date = newdate.getDate()
            return `${year}-${month}-${date}`
        },
        alltimer(){
            let statedate = new Date(this.detailobj.startTime)
            let enddate = new Date(this.detailobj.endTime)
            let newdate = enddate-statedate
            newdate = newdate/1000/3600
            return newdate
        }
    },
    methods:{
        getdata(){
            api[this.type+'Detail']({
                applicationNumber:this.id
            }).then(res=>{
                console.log(res)
                this.detailobj = res.data
            })
        }
    },
    created(){
        // console.log(`/api/apply/${this.type}?applicationNumber=${this.id}`)
        this.getdata() //获取详情数据
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
@import '@/static/detail.scss'


</style>