<template>
    <footer> 
        <router-link to="/home"><i class="iconfont icon-shouye"></i>首页</router-link>
        <router-link to="/list"><i class="iconfont icon-liebiao"></i>分类</router-link>
        <router-link to="/cart"><i class="iconfont icon-gouwuche"></i>购物车</router-link>
        <router-link to="/personal"><i class="iconfont icon-gerenzhongxin"></i>个人中心</router-link>
    </footer>
</template>

<style lang="less" scoped>
footer{ position: fixed; bottom: 0;left: 0;height: 40px;display: flex;width:100%;
  a{flex:1;flex-direction: column;flex-wrap: nowrap;display: flex;align-items: center;justify-content: center;font-size: 12px;}
 }
</style>
