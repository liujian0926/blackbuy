 // 导入Vue顶级对象
import Vue from 'vue';
import App from './App.vue';
// 导入全局样式
import "./assets/site/css/style.css";
// 导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入AXIOS
import axios from 'axios';
Vue.prototype.$axios = axios;
// 设置axios基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';
//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 设置全局过滤器
// 导入comment.js
import moment from 'moment'
// 注册
Vue.filter('formatTime', function (value,template) {
  // 返回处理后的值
  if(template){
    return moment(value).format(template)
  }else{
    return moment(value).format('YYY-MM-DD')
  }
})
// 导入首页组件
import index from './components/index.vue';
// 导入购物车组件
import car from './components/car.vue';
// 导入商品详情组件
import detail from './components/detail.vue';
// 导入会员中心容器组件
import userContainer from './components/userContainer.vue';
// 导入会员中心信息路由
import userIndex from './components/userIndex.vue'
import userOder from './components/userOder.vue'
import userDetail from './components/userDetail.vue'

// 路由规则
var routes = [
  { path: '/', component: index },
  { path:'/index',component:index},
  { path: '/car', component: car },
  {path:'/detail/:id',component:detail},
  
  { 
    path:'/userContainer', 
    component: userContainer,
    children:[
      { path:'userIndex',component: userIndex},
      { path: 'userOder', component: userOder},
      { path: 'userDetail', component: userDetail}
    ]
}
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

