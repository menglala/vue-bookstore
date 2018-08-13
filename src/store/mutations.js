import * as Types from "./mutation-types.js";

const mutations = {
  [Types.ADD_CART](state, book) {
    let exist = state.listCart.find(item => item.bookId == book.bookId);
    if (exist) {
      exist.count +=1;
    } else {
      state.listCart.push(book);
      book.count = 1;
    }
  },
  [Types.REMOVE_CART](state, id) {
    state.listCart=state.listCart.filter(item => item.bookId !== id);
  },
  [Types.CHANGE_CART](state, {id,count}) {
    let cartList = [...state.listCart]   //加了这个才可以实时更新到视图
    let exist = cartList.find(item => item.bookId == id);
    if (exist.count + count > 0) {
      exist.count += count;
      state.listCart=cartList;  //加了这个才能更新到视图
    }
  },
  [Types.CLEAR_CART](state) {
    state.listCart = [];
  }
};

export default mutations;
