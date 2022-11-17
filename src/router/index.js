import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomePage
        },
        {
            path: "/shop",
            component: ShopPage
        }
    ]
})

export default router