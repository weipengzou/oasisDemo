export default {
    path: "/message",
    component: () => import('@/views/Message'),
    children: [{
        path: 'messageList',
        component: () => import('@/components/content/messagePage')
    }]
    // component: () -> import('')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
}