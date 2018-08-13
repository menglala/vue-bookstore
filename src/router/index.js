import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    { path: "/home", component: () => import("../components/home.vue"),meta:{keepAlive:true,} },
    { path: "/list", component: () => import("../components/list.vue") },
    { path: "/cart", component: () => import("../components/cart.vue") },
    { path: "/detail/:bid", component: () => import("../components/detail.vue"),
     name : 'detail' },
    { path: "", redirect: "/home" },
    { path: "*", redirect: "/home" },
    { path: "/personal", component: () => import("../components/personal.vue") }
  ]
});
