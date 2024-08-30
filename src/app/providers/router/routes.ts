import type {RouteRecordRaw} from "vue-router";
import {DefaultLayout} from "@/app/layouts";

export const routes : readonly RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: 'home',
                component: () => import('@/pages/home'),
                name: 'HomePage',
            }
        ],
        meta: {
            roles: ['auth']
        },
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('@/pages/not-found'),
        name: 'NotFoundPage',
    }
]
