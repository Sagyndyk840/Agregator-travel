import type {RouteRecordRaw} from 'vue-router';
import { AuthLayout, DefaultLayout } from '@/app/layouts'

export const routes : readonly RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: () => import('@/pages/home'),
                name: 'HomePage',
                meta: {
                    roles: ['auth', 'guest']
                },
            }
        ],

    },
    {
      path: '/',
      component: AuthLayout,

      children: [
          {
              path: 'login',
              component: () => import('@/pages/login'),
              name: 'LoginPage',
          }
      ],
      meta: {
          roles: ['guest']
      },
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('@/pages/not-found'),
        name: 'NotFoundPage',
    }
]
