import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomePage
        }
    ]
})

export default router