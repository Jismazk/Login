// Composables
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path:'/Cliente',
    name: 'Vista_Cliente',
    component: () => import('@/components/Cliente.vue')
  },
  {
    path:'/TablasCliente',
    name: 'Empleadocliente',
    component: ()=> import('@/components/TablasCliente.vue')
  },
  {
    path:'/dsfsfgsdf',
    name:'Tablasssssss',
    component: ()=>import('@/components/BarraAdmin.vue')
  },
  {
    path:'/detalleProducto',
    name:'dp',
    component: ()=>import('@/components/DetalleProducto.vue')
  },
  {
    path:'/Denisse',
    name:'Deni',
    component: ()=> import('@/components/Detalle_contacto.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
