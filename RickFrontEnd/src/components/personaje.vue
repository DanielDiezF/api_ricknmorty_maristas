<template>
  <div class="contenedorPersonaje">
    <img v-bind:src="personaje.image" style="margin: 0px 20px 0px 0px"/>
    <div class="contenedorTexto">
      <p><b>Nombre:</b> {{ personaje.name }} </p>
      <p><b>Especie:</b> {{ personaje.species }}</p>
      <p><b>Género:</b> {{ personaje.gender }} </p>
      <p><b>Estado:</b> {{ personaje.status }} </p>
      <p><b>Localización:</b> <a v-bind:href="personaje.location.url">{{ personaje.location.name }}</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Personaje',
    props: ['personaje'],
    data () {
      return {

      }
    }
  }

</script>

<style>
  .contenedorPersonaje{
    display: block;
    text-align: left;
    margin: 10px 50px;
  }
  .contenedorTexto{
    display: inline-block;
    vertical-align: top;
  }
</style>
