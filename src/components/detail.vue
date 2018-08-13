<template>
    <div  class="box">
        <storehead :flag="true">
            <span>图书详情</span>
        </storehead>
        <div class="content">
            <label for="book-name">名称:</label>
            <input type="text" id="book-name" v-model="book.bookName"><br>
            <label for="book-info">简介:</label>
            <input type="text" id="book-info" v-model="book.bookInfo"><br>
            <label for="book-price">价格:</label>
            <input type="text" id="book-price" v-model.number="book.bookPrice"><br>
            <button @click="revise">确认修改</button>
        </div>
    </div>
</template>

<script>
import storehead from "../base/storehead.vue";
import { getOneBook, reviseBook } from "../api";
export default {
    name: "detail",
    data() {
        return { book: {} };
    },
    components: {
        storehead
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            this.book = await getOneBook(this.$route.params.bid);
            Object.keys(this.book).length > 0
                ? void 0
                : this.$router.push("/list");
        },
        async revise(id, data) {
            reviseBook(this.$route.params.bid, this.book);
            this.$router.push("/list");
        }
    },
};
</script>

<style lang="less" scoped>
.box {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    label {
        font-size: 14px;
        color: #706262;
        margin: 0 0 0 8px;
    }
    input {
        width: 80%;
        margin: 15px 0;
        height: auto;
        min-height: 30px;
    }
    button {
        background-color: #399ae6;
        color: #fff;
        width: 80px;
        height: 26px;
        margin-left: 15px;
        border: none;
    }
}
</style>
