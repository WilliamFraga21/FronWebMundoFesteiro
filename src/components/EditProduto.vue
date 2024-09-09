<script>

import ModalEditProduto from "@/components/ModalEditProduto.vue";

export default {
  components: {ModalEditProduto},

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
        <button  class="add-to-cart-btn position-absolute bottom-0 start-0 w-100  align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Editar
        </button>

        <ModalEditProduto/>

      </div>

      <!-- Corpo do Card -->
      <div class="card-body">
        <h5 class="card-title">Brigadeiro Comum</h5>
        <div class="card-text d-flex align-items-center">

          <p class="text-danger fw-bold mb-0">R$:1,20 und</p>
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
