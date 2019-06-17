import request from '@/utils/request'
export default {
    //获取用户是否登录
    islogin:()=>request.get('/api/user/info'),
    //获取列表
    getList:(data)=>request.get('/api/task/list',data),
    //登录接口
    userLogin:(data)=>request.post('/api/login',data),
    //获取加班详情
    overtimeDetail:(data)=>request.get('/api/apply/overtime',data),
    //获取休假详情
    vacationDetail:(data)=>request.get('/api/apply/vacation',data),
    //提交加班
    overtimeApply:(data)=>request.post('/api/apply/overtime',data),
    //提交休假 
    vacationApply:(data)=>request.post('/api/apply/vacation',data),
    //提交附件
    commitFile:(file)=>request.post('/api/upload',file)
} 