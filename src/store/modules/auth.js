import axios from "axios";

const state = {
  user: null,
  userDetails: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({ dispatch }, User) {
    const user = JSON.stringify({
      name: User.get("name"),
      email: User.get("email"),
      contactno: User.get("contactno"),
      password: User.get("password"),
      endereco: User.get("endereco"),
      bairro: User.get("bairro"),
      cidade: User.get("cidade"),
      estado: User.get("estado"),
      idade: User.get("idade"),
    });

    try {
      // Envia os dados do usuário para criar a conta
      await axios.post("http://localhost:8000/api/user/create", user);

      // Após criar a conta, faz login automático
      await dispatch("LogIn", User.get("email"), User.get("password"));
    } catch (error) {
      console.error("Erro no registro:", error);
      throw new Error("Erro ao criar conta.");
    }
  },

  async LogIn({ commit }, credentials) {
    // Prepare o objeto de usuário com os dados do formulário
    const user = {
        email: credentials.email,
        password: credentials.password, // Corrigido o nome do campo para 'password'
    };

    try {
        const request = await axios.post("http://localhost:8000/auth/login", user);

        // Verifica se a resposta tem um token
        if (request.data.token) {
            commit("setUser", { email: credentials.email, token: request.data.token });
            return request;
        } else {
            throw new Error("Usuário não existe"); // Mensagem genérica
        }
    } catch (error) {
        console.error("Erro no login:", error);

        // Verifique se o erro é do Axios e obtenha a mensagem
        if (error.response) {
            // Trate os códigos de status específicos
            if (error.response.status === 401) {
                throw new Error("E-mail ou Senha incorretos"); // E-mail ou senha errados
            } else if (error.response.status === 404) {
                throw new Error("Usuário não encontrado"); // Usuário não existe
            } else {
                throw new Error(error.response.data.message || "Erro ao fazer login.");
            }
        }
        throw new Error("Erro ao fazer login.");
    }
},


  async ifToken({ commit }, token) {
    try {
      const request = await axios.get("/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (
        request.status === 400 ||
        request.status === 401 ||
        request.status === 404 ||
        request.status === 500
      ) throw new Error(request.statusText);

      commit("IfToken", { infos: await request.data });
      return request;
    } catch (error) {
      console.error("Erro ao verificar token:", error);
      throw new Error("Erro ao verificar token.");
    }
  },

  async LogOut({ commit }) {
    commit("LogOut");
  },
};

const mutations = {
  setUser(state, { email, token }) {
    state.user = email;
    state.token = token;
  },
  setUserDetails(state, userDetails) {
    state.userDetails = userDetails;
  },
  IfToken(state, { infos }) {
    state.iftoken = infos;
  },
  LogOut(state) {
    state.user = null;
    state.token = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
