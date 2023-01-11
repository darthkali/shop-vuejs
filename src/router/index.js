import {createRouter, createWebHistory} from 'vue-router'
// import HomePage from "@/pages/HomePage";
// import ShopPage from "@/pages/ShopPage";
// import CreateProductPage from "@/pages/CreateProductPage";
// import ReadProductPage from "@/pages/ReadProductPage";
import NotFoundPage from "@/pages/NotFoundPage";
import store from "@/store";
import routes from "@/router/routes";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        {
            // immer ganz am Ende
            path: "/:pathMatch(.*)*",
            component: () => NotFoundPage,

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