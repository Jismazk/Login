<template>
    <v-app id="inspire">
      <v-navigation-drawer id="menubar" v-model="drawer">
        <v-icon img src="../assets/logopicazo.png"></v-icon>
       <RouterLink to="/productos"> <v-app-bar-title class="titulo2">Promociones</v-app-bar-title></RouterLink>
      <RouterLink to="/productos"><v-app-bar-title class="titulo2">Suplementos</v-app-bar-title></RouterLink>
      <RouterLink to="/proteinas"><v-app-bar-title class="titulo2">Proteinas</v-app-bar-title></RouterLink>
      <RouterLink to ="/creatinas"><v-app-bar-title class="titulo2">Creatina</v-app-bar-title></RouterLink>
    <RouterLink to="/iniciasesion"> <v-app-bar-title class="titulo2">Iniciar Sesion</v-app-bar-title></RouterLink>
     <RouterLink to="/registrate"><v-app-bar-title class="titulo2">Registrate</v-app-bar-title></RouterLink>
      <RouterLink to="/usuario"><v-app-bar-title><v-icon color="white">mdi-account</v-icon> </v-app-bar-title></RouterLink>
      <v-app-bar-title><v-icon>mdi-cart</v-icon></v-app-bar-title>
    
    </v-navigation-drawer>
   
    <v-app-bar class="d-flex flex-sm-row flex-md-row justify-center" color="grey-darken-4" id="barra">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white">
      </v-app-bar-nav-icon>
    </v-app-bar>      
       
    <v-main>
    
     <RouterView class="mb-8"></RouterView>

    </v-main>
   

    </v-app>
    

  
    </template>
    <style>
    *{
      font-family: Arial, Helvetica, sans-serif;
    }
    @media only screen and (max-width: 600px) {
      /* Estilos específicos para pantallas pequeñas */
      .titulo {
        font-size: 12px;
      }
    }
  
    .titulo{
      color:aliceblue;
    }
    .titulo2{
      color:aliceblue;
      margin: 35px;
    }
    .nav-link {
  margin: 100px;
   
}
    #menubar{
      background-color: #212121;
      color: aliceblue;
      
    }
    .logo{
      width: 25px;
      height: 25px;
      
    }
    .logo2{
      width: 25px;
      height: 25px;  
    }
    
    .buscar{
      color:aliceblue;
      width: 200px;
    
    }
    .footer-fixed {
      position: fixed;
  bottom: 0;
  width: 100%;
    }

    </style>
    <script setup>
    import { ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
      const drawer = ref(null);

   
    </script>