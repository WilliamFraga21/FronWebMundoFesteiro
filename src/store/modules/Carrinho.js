// produtosPromo.js
import axios from "axios";

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
    async addItemCarrinho({ commit }, userForm2) {
        const user = {
            Valor_Uni: userForm2.data.nameEvent,
            Quantidade: userForm2.data.tipoEvento,
            produtosvariasoes_id: userForm2.data.quantidadeConvidados,

        };

        try {
            // Envia uma solicitação POST para a API com os dados do usuário para criar uma nova conta, incluindo o token Bearer
            await axios.post(
                `/api/carrinho`,
                JSON.stringify(user),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userForm2.token}`  // Adiciona o token aqui
                    }
                }
            );
        } catch (error) {
            // Exibe erro no console e lança uma mensagem de erro específica para o registro
            console.error("Erro no registro:", error);
            throw new Error("Erro ao criar conta.");
        }
    },




    async getQuantidadeItensCarrinho({ commit },token) {
        const request = await axios.get("/api/carrinhoquantidadeitens"
            ,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`  // Adiciona o token aqui
                }
            });

        commit("setQTDCarrinho", { itens: await request.data.Itens });
    },

    async getProdutosFavortios({ commit },token) {
        const request = await axios.get("/api/favoritosme"
            ,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`  // Adiciona o token aqui
                }
            });

        commit("setprodutosFavoritos", { produtos: await request.data.Favoritos });
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
        state.produtos = produtos.produtos;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
