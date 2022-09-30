import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
    },
    {
        path: '/',
        name: 'Home',
        component: Home, // 建议进行路由懒加载，优化访问性能
        children: [
            {
                path: "/dashboard",
                name: "About",
                meta: {
                    title: "我的企业",
                },
                component: () => import('../views/About.vue')
            },
            {
                path: "/test1",
                name: "Test1",
                meta: {
                    title: "Test1",
                },
                component: () => import('../views/test1/Test1.vue')
            },
            {
                path: "/test2",
                name: "Test2",
                meta: {
                    title: "Test2",
                },
                component: () => import('../views/test1/Test2.vue')
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
