import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from "@/store/modules/auth";
import viaCep from "@/store/modules/viaCep";
import Events from "@/store/modules/Events.js";
import Professions from "@/store/modules/Professions.js";
import Categorias from "@/store/modules/Categorias.js";
import produtosPromo from './modules/produtosPromo';
import Carrinho from './modules/Carrinho.js';

export default new Vuex.Store({
  modules: {
    auth,
    viaCep,
    Events,
    Professions,
    Categorias,
    produtosPromo,
    Carrinho,

  },
  plugins: [createPersistedState()],
});
