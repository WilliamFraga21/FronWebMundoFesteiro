
<template>
  <div class="d-flex">
    <img src="../../assets/imagens/Side%20Image.svg" alt="">
    <div class="m-auto">
      <div class="mb-4">
        <h2>
          Criar uma Conta
        </h2>
      </div>
      <div class="mb-3">
        <h6>
          Insira seus dados abaixo
        </h6>
      </div>
      <div class="mb-3" style="width: 90%">
        <!-- Input com label como placeholder -->
        <input type="text" class="form-control border-bottom-only" id="exampleInputEmail1" placeholder="Nome" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <!-- Input com label como placeholder -->
        <input type="text" class="form-control border-bottom-only" id="exampleInputEmail1" placeholder="E-mail ou número de telefone" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <!-- Input com label como placeholder -->
        <input type="password" class="form-control border-bottom-only" id="exampleInputEmail1" placeholder="Senha" aria-describedby="senhaHelp">
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
      <div class="mb-3 form-check ">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Termos de uso</label>
        </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-danger m-2">Criar Conta</button>
      </div>
      <div class="d-grid gap-2">
        <button type="button" class="btn btn-outline-secondary m-2  border-light-subtle"><img src="../../assets/imagens/Icon-Google.svg" alt="" class="me-2">Inscreva-se com o Google</button>
      </div>
      <div class="d-flex justify-content-center text-secondary">
        <p>
          Já tem conta?
        </p>
        <p class="ms-2 text-decoration-underline ">
          Entrar
        </p>
      </div>
    </div>
  </div>
</template>

<script >
export default {

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