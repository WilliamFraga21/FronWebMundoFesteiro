<script >
export default {
  data() {
    return {
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"], // Adicione as cores que desejar
      selectedColor: null,
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },
  },
}
</script>

<template>
  <div class="row">
    <div class="col-2">
      <img src="@/assets/imagens/image%203.svg" class="card-img-top " alt="Imagem do Card" style="">
      <img src="@/assets/imagens/image%203.svg" class="card-img-top " alt="Imagem do Card" style="">
      <img src="@/assets/imagens/image%203.svg" class="card-img-top " alt="Imagem do Card" style="">
      <img src="@/assets/imagens/image%203.svg" class="card-img-top " alt="Imagem do Card" style="">

    </div>
    <div class="col-5">
      <img src="@/assets/imagens/image%203.svg" class="card-img-top " alt="Imagem do Card" style="">
    </div>
    <div class="col-5">


      <h2>
        Brigadeiro Comum
      </h2>

      <div class="d-flex align-items-center">
        <div>
          <img src="../assets/imagens/Vector.svg" alt="">
          <img src="../assets/imagens/Vector.svg" alt="">
          <img src="../assets/imagens/Vector.svg" alt="">
          <img src="../assets/imagens/Vector.svg" alt="">
          <img src="../assets/imagens/Vector.svg" alt="">
        </div>
        <p class="m-0 mt-1 ms-2 text-secondary" style="font-size: small">
          (150 Análises)
        </p>
        <span class="ms-1 me-1 mt-1">|</span>
         <p class="m-0 mt-1 text-success">
           Em estoque
         </p>

      </div>

      <div class="mt-3">
        <p>
          R$1,00 und
        </p>
      </div>

      <div class="border-bottom border-black ">

        <p class="m-0">
          Brigadeiro de chocolate com granulado. Brigadeiro de chocolate com granulado. Brigadeiro de chocolate com granulado. Brigadeiro de chocolate com granulado.
        </p>
      </div>

      <div class="color-selector mt-4 mb-2">
        <p class="m-0" style="font-size: x-large">
          Cores:
        </p>

        <div
            v-for="(color, index) in colors"
            :key="index"
            :style="{ backgroundColor: color }"
            class="color-circle mt-2"
            :class="{ selected: selectedColor === color } "
            @click="selectColor(color)"
        ></div>
      </div>


      <div class="d-flex align-items-center mb-4">
        <p class="m-0 me-4" style="font-size: x-large">
          Tamanho:
        </p>

        <div class="  m-auto d-flex justify-content-center selectCat" style="height: 32px;width: 32px">
          <h6 class="m-0 mt-1">
            PP
          </h6>
        </div>
        <div class="  m-auto d-flex justify-content-center selectCat" style="height: 32px;width: 32px">
          <h6 class="m-0 mt-1">
            P
          </h6>
        </div>
        <div class=" m-auto  d-flex justify-content-center selectCat" style="height: 32px;width: 32px">
          <h6 class="m-0 mt-1">
            M
          </h6>
        </div>
        <div class=" m-auto  d-flex justify-content-center selectCat" style="height: 32px;width: 32px">
          <h6 class="m-0 mt-1">
            G
          </h6>
        </div>
        <div class=" m-auto me-5 d-flex justify-content-center selectCat" style="height: 32px;width: 32px">
          <h6 class="m-0 mt-1">
            GG
          </h6>
        </div>



      </div>



      <div class="d-flex">

        <div class="d-flex">
          <button type="button" class="btn btn-outline-secondary rounded-0 rounded-start"><img src="../assets/imagens/icon-minus.svg" alt=""></button>
          <div class=" border-top border-bottom border-secondary ">
            <p class="m-0 ms-3 me-3 mt-2">
            5
            </p>

          </div>
          <button type="button" class="btn btn-danger rounded-0 rounded-end"><img src="../assets/imagens/icon-plus.svg" alt=""></button>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-danger  ">Comprar</button>

        </div>

        <div class="d-grid gap-2  mx-auto">
          <button type="button" class="btn border rounded-1 border-secondary p-1"><img src="../assets/imagens/Fill%20Heart.svg" alt=""></button>

        </div>





      </div>






    </div>
  </div>
</template>

<style scoped>

.selectCat {
  border: 1px solid black ;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  background-color: transparent; /* Fundo inicial transparente */
  cursor: pointer; /* Cursor de mãozinha ao passar o mouse */
}

.selectCat:hover {
  background-color: rgba(220, 53, 69, 1); /* Cor de fundo ao passar o mouse */
  color: white;
  border: 1px solid white ;

}






.color-selector {
  display: flex;
  gap: 10px; /* Espaço entre os círculos */
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent; /* Borda padrão transparente */
  transition: border 0.2s, box-shadow 0.2s; /* Transição suave */
}

.color-circle.selected {
  border: 2px solid black; /* Borda preta quando selecionado */
  box-shadow: inset 0 0 0 2px white; /* Vão interno branco de 1px */
}
</style>