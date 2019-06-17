<template>
  <div id="app">
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './static/common.scss';
@import './static/_minix.scss';
html,body,#app,.wrap{
  width:100%;
  height:100%;
}
#app{
    @include sizing;
}
li{
    list-style: none;
}
.wrap{
    display:flex;
    flex-direction: column;
}
// *{
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   box-sizing: border-box;
// }
</style>
