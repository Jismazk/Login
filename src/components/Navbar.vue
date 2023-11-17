<template>
<v-app-bar color="black">
  
    <v-container class="mx-auto d-flex align-center justify-center">
      
     <v-app-bar-nav-icon class="black--text"></v-app-bar-nav-icon>

      <v-btn class="d-none d-sm-flex" 
        v-for="link in links"
        :key="link"
        router :to = "link.route"
        variant="text"
      >{{ link.text }}</v-btn>

      <v-spacer></v-spacer>
      <v-avatar
        class="me-4 "
        color="blue"
        size="32"
       
      ></v-avatar>
      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          flat
          hide-details
          label="Search"
          rounded="lg"
          single-line
          variant="solo-filled"
        ></v-text-field>
      </v-responsive>
      
     

      
    </v-container>
  </v-app-bar>
  </template>
  <script setup>
  const links = [
  {text:'Promociones',route:"/Components/Cliente.vue"},
      {text:'Promociones',route:"/TablasCliente"},
      {text:'Promociones',route:"/dsfsfgsdf"},
      {text:'Promociones',route:"/cliente"},
  ]
  
  </script>
  
  <script>
  export default {
    data: () => ({
      links: [
      {text:'Promociones',route:"/Components/Cliente.vue"},
      {text:'Promociones',route:"/TablasCliente"},
      {text:'Promociones',route:"/dsfsfgsdf"},
      {text:'Promociones',route:"/cliente"},
   
      ],
    }),
  }
  </script>