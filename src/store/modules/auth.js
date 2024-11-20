import axios from "axios";

const state = {
  user: null,
  token: null,
  userDetails: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
  StateToken: (state) => state.token,
};

const actions = {
  async Register({ dispatch }, User) {
    const user = JSON.stringify({
      name: User.name,
      email: User.email,
      contactno: User.contactno,
      password: User.password,
      endereco: User.endereco,
      bairro: User.bairro,
      cidade: User.cidade,
      estado: User.estado,
      idade: User.idade,
    });

    try {
      // Envia os dados do usuário para criar a conta
      await axios.post("/api/user/create", user, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Após criar a conta, faz login automático
      await dispatch("LogIn", { email: User.email, password: User.password });
    } catch (error) {
      console.error("Erro no registro:", error);
      throw new Error("Erro ao criar conta.");
    }
  },

  async LogIn({ commit }, credentials) {
    const user = {
      email: credentials.email,
      password: credentials.password,
    };

    try {
      const request = await axios.post("/auth/login", user);

      if (request.data.token) {
        commit("setUser", { token: request.data.token });
        return request;
      } else {
        throw new Error("Usuário não existe");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      if (error.response) {
        if (error.response.status === 401) {
          throw new Error("E-mail ou Senha incorretos");
        } else if (error.response.status === 404) {
          throw new Error("Usuário não encontrado");
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
      ) {
        commit("IfToken", { infos: await request.data });
        this.$router.push("/");
        throw new Error(request.statusText);

      }
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
  setUser(state, { token }) {
    console.log(token)
    state.token = token;
  },
  setUserDetails(state, userDetails) {
    state.userDetails = userDetails;
  },
  IfToken(state, { infos }) {
    state.iftoken = infos;
    state.token = null;

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
