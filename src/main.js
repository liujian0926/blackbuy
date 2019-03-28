 // 导入Vue顶级对象
import Vue from 'vue';
import App from './App.vue';
// 导入全局样式
import "./assets/site/css/style.css";
// 导入AXIOS
import axios from 'axios';
Vue.prototype.$axios = axios;
// 设置axios基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';
//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 导入首页组件
import index from './components/index.vue';
// 导入购物车组件
import car from './components/car.vue';
// 导入商品详情组件
import detail from './components/detail.vue';

// 路由规则
var routes = [
  { path: '/', component: index },
  { path:'/index',component:index},
  { path: '/car', component: car },
  {path:'/detail/:id',component:detail}
];
// 创建路由对象
let router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router
});

