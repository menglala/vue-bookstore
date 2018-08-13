import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters.js";
import createPersistedState from "vuex-persistedstate"; //导入vuex状态持久化插件

Vue.use(Vuex);
const state = {
  //2.创建容器状态,this.$store.state指向容器实例状态
  listCart: [] //利用this.$store.state.count获取数据.修改只能通过actions（有服务器背景下）和mutation来修改数据
};

// const mutations={ //触发mutations需要使用commmit => this.$store.commit('add',2);
//   add(state,param){//第一个参数默认是state，第二个为自定义参数
//     state.count+param;
//   }
// }

export default new Vuex.Store({
  //1.创建容器store，this.$store指向容器实例
  //  strict: true, //只能通过mutation更改状态中的数据
  state, //声明状态
  mutations, //不支持异步，而actions则支持异步
  getters,
  plugins: [createPersistedState()] //添加vuex状态持久化插件
  //plugins: [logger] //使用logger插件可以在控制台打印state的变化，但vue-tools自带
});
//3.在App.vue中注册容器
