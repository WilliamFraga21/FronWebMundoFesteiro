<template>
  <div class="row">
    <!-- Imagens Laterais -->
    <div class="col-12 col-md-2 d-flex justify-content-center mb-3 mb-md-0">
      <div class="side-images">
        <img src="@/assets/imagens/image3.svg" class="card-img-top bg-body-secondary rounded mb-2" alt="Imagem do Card">
        <img src="@/assets/imagens/image3.svg" class="card-img-top bg-body-secondary rounded mb-2" alt="Imagem do Card">
        <img src="@/assets/imagens/image3.svg" class="card-img-top bg-body-secondary rounded mb-2" alt="Imagem do Card">
        <img src="@/assets/imagens/image3.svg" class="card-img-top bg-body-secondary rounded mb-2" alt="Imagem do Card">
      </div>
    </div>

    <!-- Imagem Principal -->
    <div class="col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0">
      <div class="main-image">
        <img src="@/assets/imagens/image3.svg" class="card-img-top bg-body-secondary rounded" alt="Imagem do Card">
      </div>
    </div>

    <!-- Informações do Produto -->
    <div class="col-12 col-md-5 d-flex justify-content-center">
      <div class="product-info">
        <h2>Brigadeiro Comum</h2>

        <!-- Avaliações -->
        <div class="d-flex align-items-center">
          <div>
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
            <img src="../assets/imagens/Vector.svg" alt="">
          </div>
          <p class="m-0 mt-1 ms-2 text-secondary" style="font-size: small">(150 Análises)</p>
          <span class="ms-1 me-1 mt-1">|</span>
          <p class="m-0 mt-1 text-success">Em estoque</p>
        </div>

        <!-- Preço -->
        <div class="mt-3">
          <p>R$1,00 und</p>
        </div>

        <!-- Descrição -->
        <div class="border-bottom border-black">
          <p class="m-0">
            Brigadeiro de chocolate com granulado. Brigadeiro de chocolate com granulado. Brigadeiro de chocolate com granulado. Brigadeiro de chocolate com granulado.
          </p>
        </div>

        <!-- Seletor de Cores -->
        <div class="color-selector mt-4 mb-2">
          <p class="m-0" style="font-size: x-large">Cores:</p>
          <div
              v-for="(color, index) in colors"
              :key="index"
              :style="{ backgroundColor: color }"
              class="color-circle mt-2"
              :class="{ selected: selectedColor === color }"
              @click="selectColor(color)"
          ></div>
        </div>

        <!-- Tamanhos -->
        <div class="d-flex align-items-center mb-4 flex-wrap">
          <p class="m-0 me-4" style="font-size: x-large">Tamanho:</p>
          <div v-for="size in ['PP', 'P', 'M', 'G', 'GG']" :key="size" class="m-auto d-flex justify-content-center selectCat" style="height: 32px;width: 32px">
            <h6 class="m-0 mt-1">{{ size }}</h6>
          </div>
        </div>

        <!-- Contador e Botões -->
        <div class="d-flex">
          <div class="d-flex">
            <button type="button" class="btn btn-outline-secondary rounded-0 rounded-start"><img src="../assets/imagens/icon-minus.svg" alt=""></button>
            <div class="border-top border-bottom border-secondary">
              <p class="m-0 ms-3 me-3 mt-2">5</p>
            </div>
            <button type="button" class="btn btn-danger rounded-0 rounded-end"><img src="../assets/imagens/icon-plus.svg" alt=""></button>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-danger">Comprar</button>
          </div>

          <div class="d-grid gap-2 mx-auto">
            <button type="button" class="btn border rounded-1 border-secondary p-1"><img src="../assets/imagens/Fill%20Heart.svg" alt=""></button>
          </div>
        </div>

        <!-- Informações Adicionais -->
        <div class="border mt-5 rounded border-secondary mb-5">
          <div class="d-flex border-bottom p-3 align-items-center border-secondary">
            <div>
              <img src="../assets/imagens/icon-delivery.svg" alt="">
            </div>
            <div class="ms-3">
              <p class="m-0">Entrega Grátis</p>
              <p class="m-0">Digite seu CEP para disponibilidade de entrega</p>
            </div>
          </div>
          <div class="d-flex p-3 align-items-center">
            <div>
              <img src="../assets/imagens/Icon-return.svg" alt="">
            </div>
            <div class="ms-3">
              <p class="m-0">Devolução</p>
              <p class="m-0">Devoluções de entrega grátis em 30 dias. Detalhes</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.side-images {
  width: 100%;
  max-width: 170px;
}

.main-image {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.product-info {
  width: 100%;
  max-width: 400px;
}

.color-selector {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.2s, box-shadow 0.2s;
}

.color-circle.selected {
  border: 2px solid black;
  box-shadow: inset 0 0 0 2px white;
}

.selectCat {
  border: 1px solid black;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  background-color: transparent;
  cursor: pointer;
}

.selectCat:hover {
  background-color: rgba(220, 53, 69, 1);
  color: white;
  border: 1px solid white;
}

@media (max-width: 768px) {
  .side-images {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .main-image {
    max-width: 100%;
    height: auto;
  }

  .product-info {
    max-width: 100%;
    padding: 0 15px;
  }
}
</style>
