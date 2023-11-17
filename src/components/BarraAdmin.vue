<template>
    
      <v-navigation-drawer v-model="drawer">
        <!--  -->
       
       <v-container class="op-admin" >
        <v-row >
          <v-col>
   <v-row class="icono" justify="center">
      <v-icon size="130px" > mdi-account</v-icon>
      <v-row-text>nombre del admin</v-row-text>
   </v-row>
   <v-text-space></v-text-space>
   <v-row>
    <v-card-text v-hover="last">Adminsitracion</v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Clientes </v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Empleados</v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Provedores</v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Productos</v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Inventarios</v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Entradas</v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Salidas</v-card-text>
   </v-row>
   <v-row>
    <v-card-text>Categorias</v-card-text>
   </v-row>
   <v-row justify="center" aligin="center">
    <v-btn color="black" >CERRAR SESION</v-btn>
   </v-row>
          </v-col>
        </v-row>
       </v-container>
    
      </v-navigation-drawer>
  
     
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const drawer = ref(null)
  </script>
  
  <script>
    export default {
      data: () => ({ drawer:1 }),
    }
  </script>
  
  <style>
  
  
  .op-admin{
   
    background-color: #c62828;
  
  }
  
  .v-row-text{
    justify-content: center;
  }
  
  .v-navigation-drawer__content{
       background-color: #c62828;
       align-items: center;
  
  }
  .v-icon{
    justify-items: center;
    background-color: aqua;
  }
  .v-col{
    justify-content: center;
  }
  .v-btn{
    text-align: center;
    justify-content: center;
  }
  .v-card-text{
    text-align: center;
  }
  </style>
  