import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from "@/store/modules/auth";
import viaCep from "@/store/modules/viaCep";
import Events from "@/store/modules/Events.js";
import Professions from "@/store/modules/Professions.js";

export default new Vuex.Store({
  modules: {
    auth,
    viaCep,
    Events,
    Professions,
  },
  plugins: [createPersistedState()],
});
