<template>
  <div>
    {{this.$store.state.respuesta.length}}
    <p v-for="personaje in this.$store.state.respuesta">{{ personaje.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'Resultados',
  // props: ['personajes']
  data () {
    return {
      personajes: ''
    }
  }
}

</script>

<style>

</style>
