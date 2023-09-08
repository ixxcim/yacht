import { createRouter, createWebHistory } from 'vue-router';

export default function () {
    const routerHistory = createWebHistory();
    return createRouter({
        history: routerHistory,
        routes: [
            {
                path: '/',
                name: 'index',
                component: () => import('@/views/index.vue')
            },
            {
                path: '/yacht/:id',
                name: 'yacht',
                component: () => import('@/views/yacht.vue')
            }
        ]
    });
}
