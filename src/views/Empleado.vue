<template>
<div>
    <v-app>
        <BarraAdmin></BarraAdmin>
        
        <div >
        <h1>Registro</h1>
        <TablasCliente></TablasCliente>
        </div>
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