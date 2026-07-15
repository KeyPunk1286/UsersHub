import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { useAuthStore } from '@/stores/Auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/pages/ProfilePage.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/profile/edit',
      name: 'Edit',
      component: () => import('@/pages/EditProfilePage.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/LoginPage.vue'),
      meta: {
        guestOnly: true,
      },
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/pages/RegistrationPage.vue'),
      meta: {
        guestOnly: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage,
    },
  ],
})

export default router

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return {
      name: 'Login',
      query: {
        redirect: to.fullPath,
      },
    }
  }
  if (to.meta.guestOnly && authStore.isAuthenticated) {
    return {
      name: 'Profile',
    }
  }
})
