<script>
export default {
  methods: {
    adicionarAoCarrinho() {
      alert('Item adicionado ao carrinho!');
      // Aqui você pode adicionar a lógica para adicionar ao carrinho
    }
  }
}
</script>

<template>

  <div class="col">
    <div class="card position-relative overflow-hidden">
      <!-- Imagem do Card -->
      <div class="card-img-container position-relative">
        <!-- Verifique se o caminho da imagem está correto -->
        <img src="@/assets/imagens/image%203.svg" class="card-img-top " alt="Imagem do Card" style="height: 200px">
        <!-- Barra de Adicionar ao Carrinho -->
        <button @click="adicionarAoCarrinho" class="add-to-cart-btn position-absolute bottom-0 start-0 w-100  align-items-center justify-content-center">
          Adicionar ao Carrinho
        </button>
      </div>


      <!-- Ícones no canto superior direito -->
      <div class="position-absolute d-flex flex-column" style="top: 10px; right: 10px;">
        <img src="@/assets/imagens/Fill%20Heart.svg" alt="Ícone Superior" style="height: 30px; margin-bottom: 5px;">
        <img src="@/assets/imagens/Fill%20Eye.svg" alt="Ícone Inferior" style="height: 30px;">
      </div>
      <!-- Corpo do Card -->
      <div class="card-body">
        <h5 class="card-title">Brigadeiro Comum</h5>
        <div class="card-text d-flex align-items-center">

          <p class="text-danger fw-bold mb-0">R$:1,20 und</p>
        </div>
        <div class="d-flex align-items-center">
          <div>
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
          </div>
          <p class="m-0 mt-1 ms-2" style="font-size: small">
            (150)
          </p>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.card-img-container {
  position: relative;
}

.add-to-cart-btn {
  display: none;
  cursor: pointer;
  border: none;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  height: 41px;
  /* Outros estilos do botão, se necessário */
}

.card-img-container:hover .add-to-cart-btn {
  display: flex;
}
</style>
