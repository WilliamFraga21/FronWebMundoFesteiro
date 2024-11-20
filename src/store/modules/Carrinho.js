import axios from "axios";
import store from "@/store/store";

const state = {
  produtosCarrinho: [],
  produtos: [],
  QTDItens: null,
};

const getters = {
  getProdutosCarrinho: (state) => state.produtosCarrinho,
  getQTDItensCarrinho: (state) => state.QTDItens,
  getProdutosFav: (state) => state.produtos,
};

const actions = {
  async adicionarProductCar(_, data) {
    try {
      const dataCar = {
        Valor_Uni: data.Valor_Uni,
        Quantidade: data.Quantidade,
        produtosvariasoes_id: data.produtosvariasoes_id,
      };

      const token = store.getters.StateToken;

      await axios.post("/api/carrinho", dataCar, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Erro ao adicionar ao carrinho.");
    }
  },

  async getQuantidadeItensCarrinho({ commit }) {
    try {
      const token = store.getters.StateToken;

      const response = await axios.get("/api/carrinhoquantidadeitens", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      commit("setQTDCarrinho", response.data.Itens);
    } catch (error) {
      console.error("Erro ao obter a quantidade de itens no carrinho:", error);
    }
  },

  async getProdutosFavortios({ commit }) {
    try {
      const token = store.getters.StateToken;

      const response = await axios.get("/api/favoritosme", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      commit("setprodutosFavoritos", response.data.Favoritos);
    } catch (error) {
      console.error("Erro ao obter produtos favoritos:", error);
    }
  },

  async getProdutosCarrinho({ commit }) {
    try {
      const token = store.getters.StateToken;

      const response = await axios.get("/api/carrinhome", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log("Produtos Carrinho:", response.data.Carrinho);

      commit("setProdutosCarrinho", response.data.Carrinho || []);
    } catch (error) {
      console.error("Erro ao obter produtos do carrinho:", error.response?.data || error.message);
    }
  },
};

const mutations = {
  setProdutosCarrinho(state, produtos) {
    state.produtosCarrinho = produtos;
  },
  setQTDCarrinho(state, itens) {
    state.QTDItens = itens;
  },
  setprodutosFavoritos(state, produtos) {
    state.produtos = produtos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
