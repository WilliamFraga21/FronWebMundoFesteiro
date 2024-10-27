<script>
import ModalPedidos from "@/components/ModalPedidos.vue";

export default {
  components: {ModalPedidos}

}
</script>

<template>

  <div class="col">
    <div class="card position-relative overflow-hidden">
      <!-- Imagem do Card -->
      <div class="card-img-container position-relative">
        <!-- Verifique se o caminho da imagem está correto -->
        <img src="@/assets/imagens/image3.svg" class="card-img-top " alt="Imagem do Card" style="height: 200px">
        <!-- Barra de Adicionar ao Carrinho -->
        <button  class="add-to-cart-btn position-absolute bottom-0 start-0 w-100  align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Ver Detalhes
        </button>

        <ModalPedidos/>
      </div>
      <!-- Desconto no canto superior esquerdo -->
      <div class="d-flex align-items-center position-absolute top-0 start-0 m-3">
        <div class="bg-danger rounded" style="width: 60px; height: 25px;">
          <div class="text-white d-flex align-items-center">
            <p class="m-auto">Hoje</p>
          </div>
        </div>
      </div>

      <!-- Corpo do Card -->
      <div class="card-body">
        <h5 class="card-title">Cliente: William</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Rua: Av Irecê</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">Estado: São Paulo</h6>
        <div class="card-text">

          <p class=" fw-bold mb-0">Valor Total: R$1,20</p>
          <p class=" fw-bold mb-0">Frete: R$1,20</p>
        </div>






      </div>

      <div class="card-footer text-center text-body-secondary">
        10/09/2024
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
