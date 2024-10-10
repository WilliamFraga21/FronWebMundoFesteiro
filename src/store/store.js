import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'; // Certifique-se de importar o Axios

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null, // Você pode armazenar informações do usuário aqui
    error: null, // Para armazenar mensagens de erro
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async Register({ commit }, user) {
      try {
        const response = await axios.post('http://localhost:8000/api/user/create', user); 
        commit('SET_USER', response.data); 
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || "Erro ao registrar");
          throw error; 
          
      }
    },
  },
  plugins: [createPersistedState()],
});
