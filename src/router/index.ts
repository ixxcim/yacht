import { RouterScrollBehavior, createRouter, createWebHistory } from 'vue-router';

type ScrollPositionNormalized = {
    behavior?: ScrollOptions['behavior'];
    left: number;
    top: number;
};

declare module 'vue-router' {
    interface RouteMeta {
        scrollPos?: ScrollPositionNormalized;
    }
}

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (to.name === from.name) {
        to.meta?.scrollPos && (to.meta.scrollPos.top = 0);
        return { left: 0, top: 0 };
    }

    const scrollPos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 };
    return new Promise((resolve) => {
        setTimeout(() => resolve(scrollPos), 500);
    });
};

export default function () {
    const routerHistory = createWebHistory();
    return createRouter({
        history: routerHistory,
        routes: [
            {
                path: '/',
                name: 'index',
                meta: {
                    scrollPos: {
                        top: 0,
                        left: 0
                    }
                },
                component: () => import('@/views/index.vue')
            },
            {
                path: '/yacht/:id',
                name: 'yacht',
                meta: {
                    scrollPos: {
                        top: 0,
                        left: 0
                    }
                },
                component: () => import('@/views/yacht.vue')
            }
        ],
        scrollBehavior
    });
}
