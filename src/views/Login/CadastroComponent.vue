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
          <input type="text" class="form-control border-bottom-only" id="nome" placeholder="Nome" required v-model="userData.name">
        </div>
        <div class="mb-3">
          <input type="number" class="form-control border-bottom-only" id="idade" placeholder="Idade" required v-model="userData.idade">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control border-bottom-only" id="contactno" placeholder="Telefone" required v-model="userData.contactno">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control border-bottom-only" id="cep" placeholder="CEP: 00000000" required v-model="cep" @input="handleCep">
          <div v-if="cepError" class="text-danger">{{ cepError }}</div> <!-- Exibe o erro de CEP -->
        </div>
        <div class="mb-3">
          <input type="text" class="form-control border-bottom-only" id="estado" placeholder="Estado" required v-model="userData.estado">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control border-bottom-only" id="cidade" placeholder="Cidade" required v-model="userData.cidade">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control border-bottom-only" id="bairro" placeholder="Bairro" required v-model="userData.bairro">
        </div>
        <div class="mb-3">
          <input type="text" class="form-control border-bottom-only" id="endereco" placeholder="Rua" required v-model="userData.endereco">
        </div>
        <div class="mb-3">
          <input type="email" class="form-control border-bottom-only" id="email" placeholder="E-mail" required v-model="userData.email">
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
        <div v-if="passwordError" class="text-danger">{{ passwordError }}</div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="termos" v-model="termsAccepted">
          <label class="form-check-label" for="termos">Termos de uso</label>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-danger m-2">Criar Conta</button>
        </div>
      </form>
      <div class="d-flex justify-content-center text-secondary">
        <p>Já tem conta?</p>
        <router-link to="/login" class="ms-2 text-decoration-underline">Entrar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from "@/store/store";

export default {
  name: 'UserCadastro',
  computed: {
    store() {
      return store;
    }
  },
  data() {
    return {
      errorMessage: null,
      erroIf: false,
      passwordError: null,
      cepError: null, // Novo estado para erros de CEP
      userData: {
        name: "",
        email: "",
        contactno: "",
        password: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        idade: null,
      },
      cep: "",
      termsAccepted: false,
    };
  },
  watch: {
    cep(newCep) {
      if (newCep.length < 8) {
        this.clearAddressFields();
        this.cepError = "O CEP deve ter 8 dígitos.";
      } else if (newCep.length === 8) {
        this.handleCep();
      }
    }
  },
  methods: {
    ...mapActions(["Register", "clearAddressData"]),
    async handleCep() {
      if (this.cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
          const data = await response.json();
          if (data.erro) {
            this.clearAddressFields();
            this.cepError = "CEP inválido."; // Define o erro de CEP inválido
          } else {
            this.cepError = null; // Limpa a mensagem de erro se o CEP for válido
            this.userData.estado = data.uf;
            this.userData.cidade = data.localidade;
            this.userData.bairro = data.bairro;
            this.userData.endereco = data.logradouro;
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
          this.cepError = "Erro ao buscar o CEP. Tente novamente.";
        }
      }
    },
    validatePassword(password) {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const isLongEnough = password.length >= 8;

      if (!isLongEnough) return "A senha deve ter pelo menos 8 caracteres.";
      if (!hasUpperCase) return "A senha deve conter pelo menos uma letra maiúscula.";
      if (!hasLowerCase) return "A senha deve conter pelo menos uma letra minúscula.";
      if (!hasNumber) return "A senha deve conter pelo menos um número.";
      if (!hasSpecialChar) return "A senha deve conter pelo menos um caractere especial.";
      return null; // Senha válida
    },
    async register() {
      // Validação da senha
      const passwordValidation = this.validatePassword(this.userData.password);
      if (passwordValidation) {
        this.passwordError = passwordValidation;
        return; // Interrompe o envio se a senha for inválida
      }

      this.passwordError = null; // Limpa a mensagem de erro se a senha for válida

      if (!this.termsAccepted) {
        this.errorMessage = "Você deve aceitar os termos de uso.";
        this.erroIf = true;
        return;
      }

      // Dados do usuário prontos para serem enviados
      try {
        await this.$store.dispatch("Register", this.userData);
        // Caso o cadastro seja bem-sucedido, você pode redirecionar ou limpar os campos
      } catch (error) {
        this.errorMessage = "Erro ao criar a conta. Por favor, tente novamente.";
        this.erroIf = true;
      }
    },
    clearAddressFields() {
      this.userData.estado = "";
      this.userData.cidade = "";
      this.userData.bairro = "";
      this.userData.endereco = "";
    }
  },
};
</script>

<style scoped>
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
