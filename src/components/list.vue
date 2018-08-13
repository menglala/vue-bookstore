<template>
  <div class="box">
    <storehead :flag="true">列表</storehead>
    <div class="content" ref="drop" @scroll="loadMove">
      <!--这个元素没有高度撑不起来动画效果-->
      <ul>
        <router-link :to="{name:'detail',params:{bid:book.bookId}}" v-for="(book,index) in books" :key="index" tag="li">
          <img v-lazy="book.bookCover">
          <div class="list-data">
            <h4>{{book.bookName}}</h4>
            <span>{{book.bookInfo}}</span><br>
            <strong>{{book.bookPrice|toFixed(2)}}</strong><br>
            <i class="iconfont icon-shanchu" @click.stop="remove(book.bookId)"></i>
            <i class="iconfont icon-shoucang" @click.stop="add(book)"></i>
          </div>
        </router-link>
      </ul>
      <p class="loadMove" @click="getData">加载更多</p>
      <loading :isLoading="isLoading"></loading>
    </div>
  </div>
</template>


<script>
import storehead from "../base/storehead";
import { pagination, removeBook } from "../api";
import vuex from "vuex";
import { mapMutations } from "vuex";
import * as Types from "../store/mutation-types.js";
import loading from "../base/loading";

export default {
  name: "list",
  components: {
    storehead,
    loading
  },
  data() {
    return { books: [], isLoading: true, offset: 0, hasMore: true, load: false  };
  },
  created() {
    this.getData();
  },
  mounted() { //下拉更新
    let drop = this.$refs.drop;
    let initTop = drop.offsetTop; //距离父元素(body)的距离 40 px
  
    let distance=0
    drop.addEventListener( "touchstart",  e => {
      let startY = e.touches[0].pageY; //获取手指初始位置Y
      let flag=false
      let move = e => {
        if (drop.scrollTop != 0 || drop.offsetTop != initTop) {
          return;
        }
        let moveY = e.touches[0].pageY;  //手指移动时候的位置
        distance = moveY - startY;  //手指移动的距离
        flag=true

        if (distance >= 0) {
          if (distance>50) {
            distance=50  //如果distance不设置为50,在没回到顶部手指抬起的时候,end中的distance是大于50的,盒子会在一瞬间跑到大于50的区域
            drop.style.top=initTop+50+'px'
          }else{
            drop.style.top= initTop + distance + "px";
          }
        } else {
          drop.removeEventListener('touchmove',move)
          drop.removeEventListener('touchend',end)
        }
       
      } 
      let end=e=>{
        if(!flag) return  //在
        clearInterval(this.timer)
        this.timer=setInterval((e)=>{
          if (distance<=0) {
            clearInterval(this.timer)
            drop.style.top=initTop+'px'
            console.log('获取数据');
            drop.removeEventListener('touchmove',move)
            drop.removeEventListener('touchend',end)
            this.books=[],this.hasMore=true,this.offset=0,this.getData()
            return  //如果没有return 还会走一次下面的代码 ,每次小幅度上移
          }
          distance--
          drop.style.top=initTop+distance+'px'
        },1)
        drop.removeEventListener('touchmove',move)
            drop.removeEventListener('touchend',end)
      }
      drop.addEventListener("touchmove", move, false);
      drop.addEventListener('touchend',end,false)
      }, false ); //为了绑定this为当前实例,使用箭头函数
  },
  methods: {
    async getData() {
      //	(this.books = await getBooks()), (this.isLoading = false);
      this.isLoading = false;
      if (this.hasMore && !this.load) {
        this.load = true;
        let { books, hasMore } = await pagination(this.offset);
        this.hasMore = hasMore;
        this.books = [...this.books, ...books];
        this.offset = this.books.length;
        this.load = false;
      }
    },
    loadMove() {
      let { scrollTop, scrollHeight, clientHeight } = this.$refs.drop;
      if (scrollTop + clientHeight + 20 > scrollHeight) {
        this.getData();
      }
    },
    remove(id) {
      removeBook(id);
      this.books = this.books.filter(item => item.bookId !== id);
    },
    ...mapMutations([Types.ADD_CART]),
    add(book) {
      this[Types.ADD_CART](book);
    }
  },
  filters: {
    toFixed(price, param) {
      return "￥" + price.toFixed(param);
    }
  },
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>

<style lang="less" scoped>
.loadMove {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  color: #bbb2b2;
  font-weight: bold;
}
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
    i {
      float: right;
      margin: 8px;
    }
  }
}
</style>
