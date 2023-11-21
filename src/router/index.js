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
  {// se crea una ruta en el array de routes que se encuentra en el index.js de la carpeta router
    path:'/Denisse',//aqui ira lo que aparecera en la url
    name:'Deni',//si quieres ponerle nombre a esta ruta para luego llamarla lo puedes hacer sino name no es necesario
    component: ()=> import('@/components/Detalle_contacto.vue')//esacibes esto para importar el componente y etre los parentesis pones la ruta
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
