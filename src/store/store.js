import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// import gender from "@/store/modules/gender";

export default new Vuex.Store({
    modules: {
        // gender,

    },
    plugins: [createPersistedState()],
});
