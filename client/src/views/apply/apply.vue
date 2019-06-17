<template>
    <div class="wrap">
        <div class="top">
            <Header 
            :timerbtn="false"
            :searchbtn="false"
            :title="type === 'overtime' ? '办公室加班申请表': '办公室休假申请表'"/> 
           <div class="employee-info">
                <div class="imgbox">
                    <img :src="userinfo.avatar" />
                </div>
                <div class="employee-info-r">
                    <div><span>申请人姓名</span><span>{{detailobj.nickname}}</span></div>
                    <div><span>直接主管</span><span>王双全</span></div>
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
                    <p>
                        <span>{{title}}日期</span>
                        <span>
                            <el-date-picker
                            v-model='date'
                            type="date"
                            value-format="yyyy-MM-dd"
                            :placeholder="new Date().toLocaleDateString()"
                            :default-value="(new Date()).toLocaleDateString()"
                             />
                        </span>
                    </p>
                    <p>
                        <span>{{title}}类型</span>
                        <span>
                            <select>
                                <option value="-1">默认选项</option>
                                <option v-for="val in this[type+'Types']"
                                :key="val.id">{{val.title}}</option>
                            </select>
                        </span>
                    </p>
                    <p>
                        <span>{{title}}起始时间</span>
                        <span>
                            <el-time-picker 
                            v-model="startTime"
                            format="HH:MM"/>
                        </span>
                    </p>
                    <p>
                        <span>{{title}}截至时间</span>
                        <span>
                            <el-time-picker 
                            v-model="endTime"
                            @change="getendTime"
                            format="HH:MM"/>
                        </span>
                    </p>
                    <p>
                        <span>共计时数</span>
                        <span>{{tims}}</span>
                    </p>
                </div>
            </div>
            <div class="overtime-info">
                <h3 class="h3box">
                    <div>{{title}}事由</div>
                </h3>
                <div class="mess">
                    <input type="text" placeholder="最多可输入200个字符">
                </div>
            </div>
            <div class="file-info">
                <h3 class="h3box">
                    <div>附件</div>
                </h3>
                <!-- 文件域 -->
                <el-file-picker 
                :addPicbtn="addPicbtn"
                @sendimg="sendimg"
                :pics="pics"
                />
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
import Isfile from '../../utils/isfile'
export default {
    props:{
        type:String
    },
    components:{

    },
    data(){
        return {
            detailobj:{},
            addPicbtn:true,
            pics:[],
            date:"",
            startTime:"",
            endTime:"",
            tims:'',//请假时段时间
            overtimeTypes:[
                {
                    id:0,
                    title:'双休日加班'
                },
                {
                    id:1,
                    title:'节假日加班'
                },
                {
                    id:2,
                    title:'工作日加班'
                }
            ],
            vacationTypes:[
                {
                    id:0,
                    title:'年假'
                },
                {
                    id:1,
                    title:'调休'
                }
            ]
        }
    },
    watch:{
        // pics(val){
        //     if(val.length >= 3){
        //         this.addpicbtn = false
        //         return
        //     }
        // }
    },
    computed:{
        ...mapState('user',["userinfo"]),
        title(){
            return this.type === 'overtime' ? '加班' : '休假'
        }
    },
    methods:{
        // getdata(){
        //     api[this.type+'Apply']({
        //         applicationNumber:this.id
        //     }).then(res=>{
        //         console.log(res)
        //         this.detailobj = res.data
        //     })
        // },
        getendTime(){
            console.log(11)
            let n = new Date(this.endTime).getTime() - new Date(this.startTime).getTime()
            if(n < 0){
                alert('您的操作不合法')
                return
            }else{
                this.tims = n;
            }
        },
        sendimg(url){
            this.pics.push(url)
        },
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

                })
            }else{
                alert('文件不符合规则')
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
@import '@/static/detail.scss';

</style>