// produtosPromo.js
import axios from "axios";

const state = {
    produtosCarrinho: [],
};

const getters = {
    getProdutosCarrinho: (state) => state.produtosCarrinho,
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




};


const mutations = {
    setProdutosPromocao(state, produtos) {
        state.produtosCarrinho = produtos;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
