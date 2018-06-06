import Vue from 'vue'
import Vuex from 'vuex'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const store = () => new Vuex.Store({

  actions: {
  },
  state: {
    tipos: [
      {
        text: "Personaje",
        value: "character"
      },

      {
        text: "Localización",
        value: "location"
      },

      {
        text: "Episodio",
        value: "episode"
      }
    ],
    filtros: {
      character: [
        {value: "id", text: "ID"},
        {value: "name", text: "Nombre"},
        {value: "status", text: "Estado"},
        {value: "species", text: "Especie"},
        {value: "gender", text: "Género"}
      ],
      location: [
        {value: "id", text: "ID"},
        {value: "name", text: "Nombre"},
        {value: "type", text: "Tipo"},
        {value: "dimension", text: "Dimensión"}
      ],
      episode: [
        {value: "id", text: "ID"},
        {value: "name", text: "Nombre"},
        {value: "episode", text: "Código episodio"}
      ]
    },
    respuesta: []
  },
  mutations: {
    setRespuesta(state, resp) {
      console.log(state)
      console.log(resp)
      // state.respuesta = resp
      Vue.set(state, 'respuesta', resp);
      console.log(state.respuesta.length)
      console.log(state)
    }
  },
  actions: {
    buscar (context, url) {
      console.log('buscar')
      axios.get(url)
      .then(res => {
        context.commit('setRespuesta', res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  getters: {
    tipos (state) {
      return state.tipos;
    },
    filtros (state) {
      return state.filtros;
    },
    respuesta (state) {
      return state.respuesta;
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'tipos',
      'filtros',
      'respuesta'
    ]),
    ...mapMutations([
      'setRespuesta'
    ]),
    ...mapActions([
      'buscar'
    ])
  }
})

export default store
