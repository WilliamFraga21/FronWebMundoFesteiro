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
  async adicionarProductCar({ commit }, data) {
    console.log(data)
    console.log( store.getters.StateToken)
    try {
      // console.log(token);


        const dataCar = {


          Valor_Uni: data.Valor_Uni,
          Quantidade: data.Quantidade,
          produtosvariasoes_id: data.produtosvariasoes_id,
        }




      console.log("token teste");
      const response = await axios.post(
        "/api/carrinho",
        dataCar,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
          }
        }
      );
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
      throw new Error("Erro ao adicionar ao carrinho.");
    }
  },

  async getQuantidadeItensCarrinho({ commit }) {
    try {
      const token = store.getters.StateToken;

      const response = await axios.get("/api/carrinhoquantidadeitens", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
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
          'Authorization': `Bearer ${token}`
        }
      });

      commit("setprodutosFavoritos", response.data.Favoritos);
    } catch (error) {
      console.error("Erro ao obter produtos favoritos:", error);
    }
  },
};

const mutations = {
  setProdutosPromocao(state, produtos) {
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
