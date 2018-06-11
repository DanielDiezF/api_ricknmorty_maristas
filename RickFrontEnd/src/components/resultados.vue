<template>
  <div v-if="this.$store.state.respuesta">
    <select v-on:change="goto(selectedPage)" v-model="selectedPage">
      <option v-for="page in this.$store.state.respuesta.data.info.pages">{{ page }}</option>
    </select>
    <div v-if="this.$store.state.respuesta.query.split('/')[1]=='character'">
      <Personaje v-for="personaje in this.$store.state.respuesta.data.results" :personaje="personaje" :key="personaje.id"/>
    </div>
    <div v-if="this.$store.state.respuesta.query.split('/')[1]=='location'">
      <Localizacion v-for="localizacion in this.$store.state.respuesta.data.results" :localizacion="localizacion" :key="localizacion.id"/>
    </div>
    <div v-if="this.$store.state.respuesta.query.split('/')[1]=='episode'">
      <Episodio v-for="episodio in this.$store.state.respuesta.data.results" :episodio="episodio" :key="episodio.id"/>
    </div>
  </div>
</template>

<script>
  import Personaje from '../components/personaje.vue'
  import Localizacion from '../components/localizacion.vue'
  import Episodio from '../components/episodio.vue'

  export default {
    name: 'Resultados',
    components: {
      Personaje,
      Localizacion,
      Episodio
    },
    data () {
      return {
        selectedPage: 1
      }
    },
    methods: {
      goto: function(page) {
        this.$store.dispatch('gotoPage', this.selectedPage);
      }
    }
  }

</script>

<style>

</style>
