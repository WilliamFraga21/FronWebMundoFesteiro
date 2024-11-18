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
            nomeEvento: userForm2.data.nameEvent,
            tipoEvento: userForm2.data.tipoEvento,
            quantidadePessoas: userForm2.data.quantidadeConvidados,
            data: userForm2.data.data,
            quantidadeFuncionarios: userForm2.data.quantidadeFuncionarios,
            statusEvento: userForm2.data.statusEvento,
            descricaoEvento: userForm2.data.descricao,
            endereco: userForm2.data.endereco,
            bairro: userForm2.data.bairro,
            cidade: userForm2.data.cidade,
            estado: userForm2.data.estado,
            professions: userForm2.data.selectedProfessionsWithQuantity,
        };

        try {
            // Envia uma solicitação POST para a API com os dados do usuário para criar uma nova conta, incluindo o token Bearer
            await axios.post(
                "/api/evento/create",
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


    async UpdateEvento({ commit }, userForm2) {

        // Extrai dados do formulário e os organiza em um objeto user para facilitar a chamada da API

        const user = {
            nomeEvento: userForm2.data.nameEvent,
            tipoEvento: userForm2.data.tipoEvento,
            quantidadePessoas: userForm2.data.quantidadeConvidados,
            data: userForm2.data.data,
            quantidadeFuncionarios: userForm2.data.quantidadeFuncionarios,
            statusEvento: userForm2.data.statusEvento,
            descricaoEvento: userForm2.data.descricao,
            endereco: userForm2.data.endereco,
            bairro: userForm2.data.bairro,
            cidade: userForm2.data.cidade,
            estado: userForm2.data.estado,
            professions: userForm2.data.selectedProfessionsWithQuantity,
        };

        try {
            // Envia uma solicitação POST para a API com os dados do usuário para criar uma nova conta, incluindo o token Bearer
            await axios.post(
            `/api/evento/update/${userForm2.id}`,
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



    async getEventosMe({ commit }, token) {
        try {
            const request = await axios.get("/api/evento/me", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`  // Adiciona o token aqui
                }
            });

            // Verifica se a requisição foi bem-sucedida e se status é 2xx
            console.log('status', request.status);  // Verifica o status da resposta


            // Caso a requisição seja bem-sucedida, armazena os eventos no Vuex
            console.log('meus eventos', request.data);
            commit("setEventosMe", { eventos: request.data.Evento });

            return request;  // Retorna a resposta
        } catch (error) {
            // Verifica se a exceção foi causada por um erro de resposta HTTP
            if (
                error.response.status === 400 ||
                error.response.status === 401 ||
                error.response.status === 404 ||
                error.response.status === 500
            ) {
                commit('clearData');  // Limpa os dados em caso de erro
                console.log('Erro ao carregar os eventos');
                throw new Error(error.response.statusText);  // Lança um erro com a mensagem de status
            }
            if (error.response) {
                // Se o erro tem uma resposta da API (erro 400, 401, etc.)
                console.error('Erro HTTP:', error.response.status);
                console.error('Erro na resposta:', error.response.data);
            } else if (error.request) {
                // Se não houver resposta (por exemplo, erro de rede)
                console.error('Erro de rede ou não há resposta:', error.request);
            } else {
                // Qualquer outro erro (ex.: erro no código da requisição)
                console.error('Erro desconhecido:', error.message);
            }

            // Lança o erro para que ele possa ser tratado em outro lugar, se necessário
            throw error;
        }
    },



    async uploadIMGEvent({ commit },data) {

        let dataimg = new FormData();

        dataimg.append('img',data.img)

        console.log(data)

        const request = await axios.post(`/api/evento/create/photo/${data.id}`
            ,




            dataimg,

            {
                headers: {
                    'Authorization': `Bearer ${data.token}`  // Adiciona o token aqui
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
    clearData(state) {
        state.myeventos = null;   // Limpa os dados
    },
};

// Exporta o módulo Vuex para ser utilizado em outras partes da aplicação
export default {
    state,
    getters,
    actions,
    mutations,
};
