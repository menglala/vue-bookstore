<template>
  <div  class="box"> 
    <storehead>首页</storehead>
    <div class="content">
      <swipers :swiperSlides="sliders"></swipers>
      <ul>
        <h3>热门图书</h3>
        <li v-for="(hotBook,index) in hotBooks" :key="index">
          <img :src="hotBook.bookCover">
          <div class="list-data">
            <h4>{{hotBook.bookName}}</h4>
            <span>{{hotBook.bookInfo}}</span><br>
            <strong>{{hotBook.bookPrice|toFixed(2)}}</strong>
          </div>
        </li>
      </ul>
      <loading :isLoading="isLoading"></loading>
    </div>
  </div>

</template>

<script>
import "swiper/dist/css/swiper.css";
import swipers from "../base/swiper.vue"; //使用了default语句默认只导出一个对象,所以可以写成一个变量名
import storehead from "../base/storehead.vue";
import loading from "../base/loading";
import { getSliders, getHomeData } from "../api";
//默认导入api下的index.js 如果直接 用变量声明getSliders 报错!因为/api下有多个需要导出的对象

export default {
    name: "home",
    data() {
        return { sliders: [], hotBooks: [], isLoading: true };
    },
    filters: {
        toFixed(price, param) {
            return "￥" + price.toFixed(param);
        }
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            //getSwipers获取数据后再进行异步的取值
            this.sliders = await getSliders(); //等待await后的请求完成后,代码再继续执行
            this.hotBooks = await getHomeData();
            this.isLoading = false;
        }
    },
    components: {
        swipers,
        storehead,
        loading
    }
};
</script>

<style lang="less" scoped>
ul {
    h3 {
        color: #908888;
        padding: 10px;
    }
}
ul li {
    padding: 10px;
    img {
        width: 120px;
        height: 130px;
    }
    .list-data {
        display: inline-block;
        vertical-align: top;
        width: calc(100% - 130px);
        span {
            font-size: 14px;
            color: #827171;
            margin: 10px 0;
            display: inline-block;
        }
        strong {
            font-size: 14px;
            color: red;
        }
    }
}
</style>
