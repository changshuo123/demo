<template>
    <div class="wrap">
        <div>
            <input type="text"><span>取消</span>
        </div>
        <div>
            <h3>搜索指定内容</h3>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
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
        ...mapActions('user',["getUserInfo"])
    },
    created(){
        this.getUserInfo()
    }
}
</script>
<style scoped lang="">

</style>