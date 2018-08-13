<template>
  <div id="app">
    <transition enter-active-class="animated bounceInDown" leave-active-class="rotateInUpRight" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
        </router-view>
      </keep-alive>
    </transition>
    <transition enter-active-class="animated bounceInDown" leave-active-class="rotateInUpRight" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <tab></tab>
  </div>
</template>

<script>
import tab from "./base/tab";

export default {
    name: "App",
    components: {
        tab
    }
};
</script>
<!-- 在App中style标签（没加scoped属性）中定义的样式在全局使用-->
<style lang="less">
* {
    margin: 0;
    padding: 0;
}
ul li {
    list-style: none;
}
a {
    text-decoration: none;
    color: #000;
}
a:active {
    color: red;
}
.content {
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    bottom: 40px;
    overflow: auto;
}
</style>
