
// 导入vue
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter)
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
    { path: '/index', component: index },
    { path: '/car', component: car },
    { path: '/detail/:id', component: detail },

    {
        path: '/userContainer',
        component: userContainer,
        children: [
            { path: 'userIndex', component: userIndex },
            { path: 'userOder', component: userOder },
            { path: 'userDetail', component: userDetail }
        ]
    }
];
// 创建路由对象
let router = new VueRouter({
    routes
});

// 暴露router
export default router;