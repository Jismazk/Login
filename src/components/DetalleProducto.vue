<template>
<v-app>

    
   
       <v-container>
    <v-img style="width: 400px; height: 400px;" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.mx%2FProteina-Total-5lb-2-7-capuchino%2Fdp%2FB0BL44BFQD&psig=AOvVaw2psApNju7tv_aWHv0LV_gN&ust=1700686003486000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi7xpr71YIDFQAAAAAdAAAAABAF">
    </v-img>
    <v-img style="width: 400px; height: 400px;" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.mx%2FProteina-Total-5lb-2-7-capuchino%2Fdp%2FB0BL44BFQD&psig=AOvVaw2psApNju7tv_aWHv0LV_gN&ust=1700686003486000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi7xpr71YIDFQAAAAAdAAAAABAF">
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