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
//  导入抽取的路由
import router from './router.js'
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router
});

