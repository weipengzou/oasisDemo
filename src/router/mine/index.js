export default {
    path: "/account",
    component: () => import('@/views/Mine'),
    children: [
        {
            path: 'user',
            component: () => import('@/components/content/userPage')
        },
        {
            path:'login',
            component:()=>import('@/components/content/loginPage')
        }
    ]
    // component: () -> import('')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
}