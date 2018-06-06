<template>
  <div>
  	<h1>Buscador de Rick y Morty</h1>
    <Buscador/>
    <Resultados/>
  </div>
</template>

<script>
  import Buscador from '../components/buscador.vue'
  import Resultados from '../components/resultados.vue'

  export default {
    name: 'RickAPI',
    components: {
      Buscador,
      Resultados
    },
    data () {
      return{}
    },
    methods: {

    }
  }

</script>

<style>

</style>
