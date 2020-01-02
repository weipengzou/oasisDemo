export default {
    path: "/home",
    component: () => import('@/views/Home')
    // component: () -> import('')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
}