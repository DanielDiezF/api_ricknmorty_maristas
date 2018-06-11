<template>
  <div>
    <select v-model="tipo_seleccionado">
      <option v-for="tipo in tipos" v-bind:value="tipo.value">{{ tipo.text }}</option>
    </select>
    <select v-model="filtro_seleccionado" v-if="tipo_seleccionado">
      <option v-for="filtro in filtros[tipo_seleccionado]" v-bind:value="filtro.value">{{ filtro.text }}</option>
    </select>
    <input type="text" v-model="termino">
    <button @click="buscar">Buscar</button>
  </div>
</template>

<script>
  export default {
    name: 'Buscador',
    data () {
      return {
        tipos: this.$store.getters.tipos,
        filtros: this.$store.getters.filtros,
        tipo_seleccionado: '',
        filtro_seleccionado: '',
        termino: ''
      }
    },
    methods: {
      buscar: function() {
        let url = `http://localhost:3773/${this.tipo_seleccionado}/${this.filtro_seleccionado}/${this.termino}`;
        this.$store.dispatch('buscar', url);
      }
    }
  }

</script>

<style>

</style>
