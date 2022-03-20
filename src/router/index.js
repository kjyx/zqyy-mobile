import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 重写 push 与 replace 解决重复点击报错
// 先把原型上的push方法 和 replace方法 保  存一份
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {
        }, () => {
        })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {
        }, () => {
        })
    }
}
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>import('@/views/home'),
        meta:{header:true,footer:true}
    },
    // 产品介绍
    {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/product'),
        meta:{header:true,footer:true}
    },
    //案例
    {
        path: '/case',
        name: 'Case',
        component: () =>import('@/views/case'),
        meta:{header:true,footer:false}
    },
    {
        path: '/news',
        name: 'News',
        component: () =>import('@/views/news'),
        meta:{header:true,footer:true}
    },
    {
        path: '/newsInfo/:id?',
        name: 'newsInfo',
        component: () =>import('@/views/newsInfo'),
        meta:{header:true,footer:true}
    }

]

const router = new VueRouter({
    routes
})

export default router
