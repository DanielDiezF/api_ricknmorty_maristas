<template>
  <div>
    <p v-for="personaje in this.$store.getters.respuesta">{{ personaje.name }}</p>
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