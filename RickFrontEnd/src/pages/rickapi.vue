<template>
  <div>
  	<h1>Buscador de Rick y Morty</h1>
    <Buscador/>
    <Resultados/>
  </div>
</template>

<script>
  import store from '../store';
  import Buscador from '../components/buscador.vue'
  import Resultados from '../components/resultados.vue'

  export default {
    name: 'RickAPI',
    store,
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