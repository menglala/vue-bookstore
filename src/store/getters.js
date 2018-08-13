let getters = {
  //Getter 接受 state,Getter 会暴露为 store.getters 对象，可以以属性的形式访问
  totalPrice: state => {
    return state.listCart.reduce((prev, next) => {
      return prev + next.bookPrice * next.count;
    }, 0);
  },

  list: state => state.listCart
};

export default getters;

//任何组件中使用,通过属性访问时是作为 Vue 的响应式系统的一部分缓存
//computed: {
// doneTodosCount() {
//   return this.$store.getters.doneTodosCount
// }
// }
//getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
// getters: {
//   // ...
//   getTodoById: state => id => {
//     return state.todos.find(todo => todo.id === id);
//   };
// }
