// Importa a biblioteca Axios para realizar chamadas HTTP
import axios from "axios";

// Estado inicial da store do Vuex
const state = {
    categorias:[],
};

// Getters são funções que recuperam o estado de forma derivada e controlada
const getters = {
    GetCategorias: (state) => state.categorias,
};

// Ações assíncronas que podem realizar chamadas à API e manipular o estado através de mutations
const actions = {
    // Ação para registrar um novo usuário


    async getcategorias({ commit }) {
        const request = await axios.get("/categorias");
        console.log(request.data.Categorias)
        commit("setCategorias", { datacate: await request.data.Categorias });
    },





};

// Mutations são responsáveis por atualizar o estado de maneira síncrona
const mutations = {
    setCategorias(state, { datacate }) {
        console.log(datacate)
        state.categorias = datacate;
    },
};

// Exporta o módulo Vuex para ser utilizado em outras partes da aplicação
export default {
    state,
    getters,
    actions,
    mutations,
};
