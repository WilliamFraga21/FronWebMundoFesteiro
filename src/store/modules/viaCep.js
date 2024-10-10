
const state = {
  address: {
    cep: null,
    cidade: null,
    estado: null,
    bairro: null,
    rua: null,
    numero: null,
  }
};

const getters = {
  city: (state)=> state.address,
};

const actions = {
  async GetAddress({ commit }, zipCode){
    zipCode = zipCode.replace(/[^a-az-z0-9]/g, "")

    if (zipCode.length < 8) {
      commit('clearAddress')
      return;
    }

    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);

    const data = await response.json();

    if (response.status === 200 && data.erro === true) {
      throw new Error("Cep não encontrado!");
    }
    commit("setAddress", { data });
 },
  clearAddressData({ commit }) {
    commit('clearAddress');
  }
  
};

const mutations = {
  setAddress(state, { data }) {
    state.address.cep = data.cep;
    state.address.endereco = data.endereco;
    state.address.cidade = data.cidade;
    state.address.estado = data.estado;
    state.address.bairro = data.bairro;
  },

  clearAddress(state) {
    state.address.cep = null;
    state.address.endereco = null;
    state.address.cidade = null;
    state.address.estado = null;
    state.address.bairro = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};