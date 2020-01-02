export default {
    path: "/message",
    component: () => import('@/views/Message')
    // component: () -> import('')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
}