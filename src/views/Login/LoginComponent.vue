<template>
  <div class="d-flex">
    <img src="../../assets/imagens/Side%20Image.svg" alt="">
    <div class="m-auto">
      <div class="mb-4">
        <h2>Entrar na sua Conta</h2>
      </div>
      <div class="mb-3">
        <h6>Insira seus dados abaixo</h6>
      </div>
      <form @submit.prevent="login">
        <div class="mb-3">
          <input
            type="text"
            class="form-control border-bottom-only"
            id="email"
            placeholder="E-mail ou número de telefone"
            required
            v-model="credentials.email"
          >
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control border-bottom-only"
            id="senha"
            placeholder="Senha"
            required
            v-model="credentials.password"
          >
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-danger m-2">Entrar</button>
        </div>
      </form>
      <!-- Exibe a mensagem de erro se houver falha no login -->
      <div v-if="loginError" class="text-danger mt-2">{{ loginError }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      loginError: null, // Armazena a mensagem de erro
    };
  },
  methods: {
    ...mapActions(['LogIn']),
    async login() {
      this.loginError = null; // Limpa a mensagem de erro antes da nova tentativa
      try {
        await this.LogIn(this.credentials); // Passa o objeto `credentials`
        this.$router.push('/'); // Redireciona após login
      } catch (error) {
        console.error("Erro no login:", error);
        this.loginError = error.message; // Usa a mensagem de erro retornada
      }
    }
  }
}
</script>

<style scoped>
/* Estilo para input com borda inferior apenas */
.border-bottom-only {
  border: none;
  border-bottom: 1px solid #ccc; /* Define a borda inferior */
  border-radius: 0; /* Remove borda arredondada */
  padding: 8px; /* Ajusta o padding conforme necessário */
  box-shadow: none; /* Remove sombras padrão */
}

/* Ajusta o estilo do input quando em foco */
.border-bottom-only:focus {
  border-bottom-color: #007bff; /* Muda a cor da borda ao focar */
  box-shadow: none; /* Mantém sem sombra */
}
</style>
