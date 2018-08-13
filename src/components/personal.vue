<template>
<div class="box">
  <storehead :flag="true">个人中心</storehead>
  <div class="content">
    <div class="user_avatar">
      <img src="../assets/2757444507812f6.jpg">
    </div>
    <ul>
      <router-link to="/cart" tag="li"><span>我的购物车</span><strong>></strong></router-link>
      <router-link to="/home" tag="li"><span>热门图书</span><strong>></strong></router-link>
    </ul>
  </div>
</div>
</template>

<script>
import storehead from "../base/storehead";

export default {
  components: {
    storehead
  }
};
</script>

<style lang="less" scoped>
.user_avatar{background: url('../assets/hero11.jpg'),no-repeat;width: 100%;height: 200px;
background-size: 100%;
img{    width: 100px;
    height: 100px;
    border-radius: 90px;
    margin-top:50px;};text-align: center;}
ul{width: 100%; height: calc(100% - 200px);background-color: #f1f1f1;
li{height: 51px;
    line-height: 51px;
    color: #5a5555;
    font-family: sans-serif;
    font-size: 18px;background-color:#fff;padding-left:15px;strong{float: right;margin-right:14px;}
&:nth-child(1){border-bottom:2px solid #eee;}}}
</style>
