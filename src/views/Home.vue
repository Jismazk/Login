<template>
  <div>
  <v-app>
    <Navbar></Navbar>
    
   <v-main>
    <DetalleProducto></DetalleProducto>
   </v-main>
    
   
  </v-app> 
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Cliente from '@/components/Cliente.vue';
import BarraAdmin from '@/components/BarraAdmin.vue';
import DetalleProducto from '@/components/DetalleProducto.vue';

export default{
  name : 'Home',
  components:{
    Navbar,
    Cliente,
    BarraAdmin,
    DetalleProducto
  }
}
</script>