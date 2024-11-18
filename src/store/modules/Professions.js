import axios from "axios";

const state = {
    professions: [],
};
const getters = {
    GetProfessions: (state) => state.professions,
};
const actions = {
    async getProfessions({ commit }) {
        const request = await axios.get("/profissao/getALL2"
        );

        commit("setProfessions", { profession: await request.data.professions });
    },
};
const mutations = {
    setProfessions(state, { profession }) {
        state.professions = profession;
    },
    LogOutprofessions(state) {
        state.professions = null;
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
};