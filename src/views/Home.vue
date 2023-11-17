<template>
  <div>
  <v-app>
    <Navbar></Navbar>
    
    <div>
    <RouterView ></RouterView>
   </div>
  </v-app> 
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Cliente from '@/components/Cliente.vue';
import BarraAdmin from '@/components/BarraAdmin.vue';
export default{
  name : 'Home',
  components:{
    Navbar,
    Cliente,
    BarraAdmin
  }
}
</script>