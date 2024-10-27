// produtosPromo.js
import axios from "axios";

const state = {
  produtosPromocao: [],
};

const getters = {
  getProdutosPromocao: (state) => state.produtosPromocao,
};

const actions = {
  async fetchProdutosPromocao({ commit }, idPromo) {
    try {
      const response = await axios.get(`/Promo/${idPromo}`);
      console.log('Resposta da API:', response.data); // Verifique a estrutura da resposta
      if (response.status === 200 || response.status === 201) {
        commit("setProdutosPromocao", response.data.Produtos);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos em promoção:", error);
    }
  },



  async getProdutosCat({ commit }, id) {
    try {
      const response = await axios.get(`/produtossubcat/${id}`);
      console.log('Resposta da API:', response.data); // Verifique a estrutura da resposta
      if (response.status === 200 || response.status === 201) {
        commit("setProdutosPromocao", response.data.Produtos);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos em promoção:", error);
    }
  },
};


const mutations = {
  setProdutosPromocao(state, produtos) {
    state.produtosPromocao = produtos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
