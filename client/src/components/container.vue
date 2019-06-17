<template>
    <div class="container">
        <ul>
            <List v-for="item in curlist" :key="item.applicationNumber" :curobj="item"/>
        </ul>
    </div>
</template>
<script>
import List from '../components/list'
export default {
    props:{
        curlist:Array
    },
    components:{
        List
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
<style scoped lang="">
.container{
    width:100%;
    height:100%;
    overflow: auto;
}
</style>