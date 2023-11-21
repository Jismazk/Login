<template>
<v-app>

    
   
       <v-container>
    <v-img style="width: 400px; height: 400px;">
    </v-img>
    <v-img style="width: 400px; height: 400px;">
    </v-img>
</v-container> 
    
</v-app>
</template>

<script>
export default{
    data: () => ({
        headers: [
            {title: 'Producto',
        align: 'start',
        key: 'name'},
        {title: 'Categoria', key:id_cat},
        {title:'Costo', key:'money'},
        {title:'Cantidad',key:'numero'},
        {title:'Precio', key:'revervmoney'},
        {title:'Empresa',key:'esafa'}
        ],
        Producto_prueba: [{name: 'Algo',id_cat:'16',money:'$4000',numero:'192',revermoney:'$$$',esafa:'LALA'}]
    })
}

</script>