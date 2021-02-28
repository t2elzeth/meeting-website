export default [
  {
    path: '/support', // Тех. Поддержка
    name: 'support',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/Support")
  },
]