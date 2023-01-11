
const shopRoutes = [
    {
        path: "/shop",
        component: () => import(/* webpackChunkName: 'group-shop' */ '@/pages/ShopPage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/shop/create/product",
        component: () => import(/* webpackChunkName: 'component-createproductpage' */ '@/pages/CreateProductPage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/shop/read/product/:id",
        name: "ReadProduct",
        component: () => import(/* webpackChunkName: 'group-shop' */ '@/pages/ReadProductPage.vue'),
        props: true,
        meta: {
            requiresAuth: true,
            enterTransition: "rubberBand",
        }
    },

]

export default shopRoutes