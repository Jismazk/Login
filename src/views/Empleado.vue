<template>
<div>
    <v-app>
    <BarraAdmin></BarraAdmin>    
        
        <v-main>
        <h1>Cliente</h1>
        <TablasCliente></TablasCliente>
        </v-main>
    </v-app>
</div>
</template>

<script>
import TablasCliente from '@/components/TablasCliente.vue';
import BarraAdmin from '@/components/BarraAdmin.vue';
export default{
  name : 'Empleado',
  components:{
    BarraAdmin,
    TablasCliente
  }
}
</script>