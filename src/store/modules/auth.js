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
  async Register({ dispatch},User) {
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

    // Envia os dados do usuário para criar a conta
    await axios.post("http://localhost:8000/api/user/create", user);

    // Após criar a conta, faz login automático
    let UserForm = new FormData();
    UserForm.append("email", User.email);
    UserForm.append("senha", User.senha);
    await dispatch("LogIn", UserForm);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("LogOut", user);
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
  LogOut(state) {
    state.user = null;
    state.token = null;
    state.userDetails = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
