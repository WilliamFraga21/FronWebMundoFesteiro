<template>
  <div class="d-flex">
    <img src="../../assets/imagens/Side%20Image.svg" alt="">
    <div class="form-container m-auto">
      <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>
        <div class="mb-4">
          <h2>Criar uma Conta</h2>
        </div>
        <div class="mb-3">
          <h6>Insira seus dados abaixo</h6>
        </div>
        <form @submit.prevent="register">
          <div class="mb-3" style="width: 90%">
            <input type="text" class="form-control border-bottom-only" id="nome" placeholder="Nome" required v-model="userData.nomeCompleto">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control border-bottom-only" id="email" placeholder="E-mail" required v-model="userData.email">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control border-bottom-only" id="contactno" placeholder="Número de Contato" required v-model="userData.contato">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control border-bottom-only" id="senha" placeholder="Senha" required v-model="userData.password">
            <div id="senhaHelp" class="form-text">
              Sua senha deve ter pelo menos:
              <ul>
                <li>8 caracteres</li>
                <li>Uma letra maiúscula</li>
                <li>Uma letra minúscula</li>
                <li>Um número</li>
                <li>Um caractere especial (ex: !, @, #, $, etc.)</li>
              </ul>
            </div>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control border-bottom-only" id="endereco" placeholder="Endereço" required v-model="userData.endereco">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control border-bottom-only" id="bairro" placeholder="Bairro" required v-model="userData.bairro">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control border-bottom-only" id="cidade" placeholder="Cidade" required v-model="userData.cidade">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control border-bottom-only" id="estado" placeholder="Estado" required v-model="userData.estado">
          </div>
          <div class="mb-3">
            <input type="number" class="form-control border-bottom-only" id="idade" placeholder="Idade" required v-model="userData.idade">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="termos" v-model="termsAccepted">
            <label class="form-check-label" for="termos">Termos de uso</label>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-danger m-2">Criar Conta</button>
          </div>
        </form>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-outline-secondary m-2 border-light-subtle">
            <img src="../../assets/imagens/Icon-Google.svg" alt="" class="me-2">Inscreva-se com o Google
          </button>
        </div>
        <div class="d-flex justify-content-center text-secondary">
          <p>Já tem conta?</p>
          <p class="ms-2 text-decoration-underline">Entrar</p>
        </div>
    </div>
  </div>
</template>

<script>
// import store from "@/store"; 
import { mapActions } from 'vuex';

export default {
  name: 'UserCadastro',

  data() {
    return {
      errorMessage: null,
      erroIf: false,
      userData: {
        nomeCompleto: "",
        email: "",
        contato: "",
        password: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        idade: null,
      },
      termsAccepted: false,
    };
  },

  mounted() {
    this.$store.commit("setError", { error: false });
  },

  methods: {
    ...mapActions(["Register"]),

    async register() {
      if (!this.termsAccepted) {
        this.errorMessage = "Você deve aceitar os termos de uso.";
        return;
      }
      
      const User = new FormData();
      User.append("name", this.userData.nomeCompleto);
      User.append("email", this.userData.email);
      User.append("contactno", this.userData.contato);
      User.append("password", this.userData.password);
      User.append("endereco", this.userData.endereco);
      User.append("bairro", this.userData.bairro);
      User.append("cidade", this.userData.cidade);
      User.append("estado", this.userData.estado);
      User.append("idade", this.userData.idade);

      try {
        await this.Register(User);
        this.$router.push("/"); // Redireciona após o cadastro bem-sucedido
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Ocorreu um erro ao cadastrar.";
        this.erroIf = true;
        setTimeout(() => {
          this.erroIf = false;
        }, 4000);
      }
    },
  },
}
</script>

<style scoped>
/* Estilo para input com borda inferior apenas */
.border-bottom-only {
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  padding: 8px;
  box-shadow: none;
}

.border-bottom-only:focus {
  border-bottom-color: #007bff;
  box-shadow: none;
}
</style>
