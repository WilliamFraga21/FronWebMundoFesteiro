// Importa a biblioteca Axios para realizar chamadas HTTP
import axios from "axios";

// Estado inicial da store do Vuex
const state = {
    myeventos:[],
};

// Getters são funções que recuperam o estado de forma derivada e controlada
const getters = {
    GetMyEventos: (state) => state.myeventos,
};

// Ações assíncronas que podem realizar chamadas à API e manipular o estado através de mutations
const actions = {
    // Ação para registrar um novo usuário
    async CriarEvento({ commit }, userForm2) {

        // Extrai dados do formulário e os organiza em um objeto user para facilitar a chamada da API

        const user = {
            nomeEvento: userForm2.nameEvent,
            tipoEvento: userForm2.tipoEvento,
            quantidadePessoas: userForm2.quantidadeConvidados,
            data: userForm2.data,
            quantidadeFuncionarios: userForm2.quantidadeFuncionarios,
            statusEvento: userForm2.statusEvento,
            descricaoEvento: userForm2.descricao,
            endereco: userForm2.endereco,
            bairro: userForm2.bairro,
            cidade: userForm2.cidade,
            estado: userForm2.estado,
            professions: userForm2.selectedProfessionsWithQuantity,
        };

        try {
            // Envia uma solicitação POST para a API com os dados do usuário para criar uma nova conta, incluindo o token Bearer
            await axios.post(
                "http://localhost:8000/api/evento/create",
                JSON.stringify(user),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJkd2Fkd2FkZGR3YUBnbWFpbC5jb20iLCJuYW1lIjoibWxub21vaSIsImlhdCI6MTcyOTk1ODUwOSwiZXhwIjoxNzMwNTE0MDY0fQ.ADih34Ioh8w0OZ3W3hmRKIKTh8TnDg1m27cbyl5AhgQ`  // Adiciona o token aqui
                    }
                }
            );
        } catch (error) {
            // Exibe erro no console e lança uma mensagem de erro específica para o registro
            console.error("Erro no registro:", error);
            throw new Error("Erro ao criar conta.");
        }
    },



    async getEventosMe({ commit }) {
        const request = await axios.get("http://localhost:8000/api/evento/me"
        ,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJkd2Fkd2FkZGR3YUBnbWFpbC5jb20iLCJuYW1lIjoibWxub21vaSIsImlhdCI6MTcyOTk1ODUwOSwiZXhwIjoxNzMwNTE0MDY0fQ.ADih34Ioh8w0OZ3W3hmRKIKTh8TnDg1m27cbyl5AhgQ`  // Adiciona o token aqui
                }
            });

        commit("setEventosMe", { eventos: await request.data.Evento });
    },


};

// Mutations são responsáveis por atualizar o estado de maneira síncrona
const mutations = {
    setEventosMe(state, { eventos }) {
        state.myeventos = eventos;
    },
};

// Exporta o módulo Vuex para ser utilizado em outras partes da aplicação
export default {
    state,
    getters,
    actions,
    mutations,
};
