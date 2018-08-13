<template>
  <div  class="box">
    <storehead :flag="true">购物车</storehead>
    <div class="content">
      <ul>
        <li v-for="(book,index) in list" :key="index">
          <img :src="book.bookCover">
          <div class="book-data">
            <h4>{{book.bookName}}</h4>
            <span>{{book.bookInfo}}</span><br>
            <strong>{{book.bookPrice|toFixed(2)}}</strong>
            <p>
              <b @click="changeCount({id:book.bookId,count:-1})">-</b>
              <input type="number" v-model="book.count" min="1">
              <b @click="changeCount({id:book.bookId,count:1})">+</b>
            </p>
            <i @click="remove(book.bookId)">×</i>
          </div>
        </li>
      </ul>
      <div class="total-prices">
        <h4>合计:
          <strong>{{totalPrice|toFixed(2)}}</strong>
          <button @click="clear">清空</button>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import storehead from "../base/storehead";
import store from "../store/index.js";
import { mapGetters, mapMutations } from "vuex";
import * as Types from "../store/mutation-types.js";

export default {
    name: "cart",
    components: {
        storehead
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["totalPrice", "list"])
        //把 `this.list` 映射为 `this.$store.getters.list`
    },
    methods: {
        ...mapMutations([
            Types.REMOVE_CART,
            Types.CHANGE_CART,
            Types.CLEAR_CART
        ]),
        changeCount({ id, count }) {
            this[Types.CHANGE_CART]({ id, count });
        },
        remove(id) {
            this[Types.REMOVE_CART](id);
        },
        clear() {
            this[Types.CLEAR_CART]();
        }
    },
    created() {},
    filters: {
        toFixed(price, param) {
            return "￥" + price.toFixed(param);
        }
    }
};
</script>

<style lang="less" scoped>
ul li {
    padding: 10px;
    font-size: 14px;
    position: relative;
    img {
        width: 100px;
        height: 90px;
    }
    .book-data {
        display: inline-block;
        width: calc(100% - 110px);
        vertical-align: top;
        i {
            position: absolute;
            right: 15px;
            top: 13px;
            font-weight: bold;
            font-size: 16px;
            &:hover {
                color: red;
            }
        }
    }
    span {
        font-size: 13px;
        color: rgb(138, 137, 137);
    }
    h4 {
        margin: 5px 0;
    }
    strong {
        color: red;
        float: left;
        position: absolute;
        bottom: 12px;
    }
    p {
        position: absolute;
        bottom: 12px;
        display: inline-block;
        right: 13px;
        input {
            margin: 0 5px;
            width: 26px;
            right: 16px;
            text-align: center;
        }
    }
}
.total-prices {
    width: 100%;
    position: fixed;
    bottom: 40px;
    left: 0;
    height: 40px;
    padding: 8px;
    line-height: 40px;
    strong {
        color: red;
    }
    button {
        width: 70px;
        float: right;
        margin: 6px 30px 0 0;
        border: none;
        background-color: red;
        color: #fff;
        height: 26px;
        font-size: 15px;
    }
}
</style>
