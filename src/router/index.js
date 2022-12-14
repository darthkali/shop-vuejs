import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import CreateProductPage from "@/pages/CreateProductPage";
import ReadProductPage from "@/pages/ReadProductPage";
import NotFoundPage from "@/pages/NotFoundPage";
import store from "@/store";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            component: HomePage,
            beforeEnter: (to, from, next) => {
                if (store.getters.isAuthenticated) {
                    next("/shop")
                } else {
                    next()
                }
            }
        },
        {
            path: "/shop",
            component: ShopPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/shop/create/product",
            component: CreateProductPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/shop/read/product/:id",
            name:"ReadProduct",
            component: ReadProductPage,
            props: true,
            meta: {
                requiresAuth: true,
                enterTransition:"rubberBand",
            }
        },
        {
            // immer ganz am Ende
            path: "/:pathMatch(.*)*",
            component:NotFoundPage,

        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/");
    } else {
        next()
    }
})

export default router