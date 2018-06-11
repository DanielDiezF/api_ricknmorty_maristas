<template>
  <div class="contenedorLocalizacion">
    <div class="contenedorTexto">
      <p><b>Nombre:</b> {{ localizacion.name }} </p>
      <p><b>Tipo:</b> {{ localizacion.type }}</p>
      <p><b>Dimensión:</b> {{ localizacion.dimension }} </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Localizacion',
    props: ['localizacion'],
    data () {
      return {

      }
    }
  }

</script>

<style>
  .contenedorLocalizacion{
    display: block;
    text-align: left;
    margin: 10px 50px;
  }
  .contenedorTexto{
    display: inline-block;
    vertical-align: top;
  }
</style>
