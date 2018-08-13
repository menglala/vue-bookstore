<template>
  <img  class="loading" src="../assets/loading-bar-scribble-animation-doodle-cartoon-4k_sdfqzybaux_thumbnail-full05.png" v-if="isLoading" >
</template>


<script>
  export default {
    name:'loading',
    props:{isLoading:{type:Boolean, default:true }}
  }
</script>

<style lang="less" scoped>
.loading{width:100%;position: fixed;left: 0;top:40px;}
</style>
