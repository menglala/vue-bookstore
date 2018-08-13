<template>
    <header>
        <i class="iconfont icon-htmal5icon37" @click="goBack" v-if="flag"></i>
        <span><slot></slot></span>
    </header>
</template>

<script>
export default {
  name: "storehead",
  props: {
    flag: {
      type: Boolean,
      defalut: true
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f4f4f4;
  height: 40px;
  line-height: 40px;
  text-align: center;
  i {
    float: left;
    margin: 0 0 0 5px;
  }
}
</style>
