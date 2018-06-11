<template>
  <div class="contenedorEpisodio">
    <div class="contenedorTexto">
      <p><b>{{ episodio.episode }} {{ episodio.name }} </b></p>
      <p><b>Emisión:</b> {{ episodio.air_date }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Episodio',
    props: ['episodio'],
    data () {
      return {

      }
    }
  }

</script>

<style>
  .contenedorEpisodio{
    display: block;
    text-align: left;
    margin: 10px 50px;
  }
  .contenedorTexto{
    display: inline-block;
    vertical-align: top;
  }
</style>
