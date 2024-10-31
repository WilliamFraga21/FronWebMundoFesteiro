<script>
import {mapActions, mapGetters} from 'vuex';
import store from "@/store/store";

export default {
  props: {
    produto: {
      type: Array,
      required: true,
    },
    produtoCarrinho: {
      type: Object,
      required: true,
    },

  },
  computed: {
    store() {
      return store;
    }
  },
  methods: {
    ...mapActions(["adicionarProductCar"]),
    ...mapGetters(["StateToken"]),
    
    async addToCarrinho() {
      // const produtoCarrinho[this.produto];

      const produtoCarrinho = {
      Valor_Uni: this.produto.Valor,
      Quantidade: 1,
      produtosvariasoes_id: this.produto.idVariacao,
      token: store.getters.StateToken,
      };


      try {
        // Envia a ação CriarEvento com os dados formatados
        await this.adicionarProductCar(produtoCarrinho);

        // Aqui você pode adicionar qualquer ação a ser realizada após o sucesso, como redirecionar ou limpar os campos
      } catch (error) {
        this.errorMessage = "Erro ao criar o Carrinho. Por favor, tente novamente.";
        this.erroIf = true;
      }
    },
  },
};
</script>

<template>

    <div class="col">
      <div class="card position-relative overflow-hidden">
        <!-- Imagem do Card -->
        <div class="card-img-container position-relative">
          <!-- Verifique se o caminho da imagem está correto -->
          <img src="@/assets/imagens/image3.svg" class="card-img-top " alt="Imagem do Card" style="height: 200px">
          <!-- Barra de Adicionar ao Carrinho -->
          <button @click="addToCarrinho" class="add-to-cart-btn position-absolute bottom-0 start-0 w-100  align-items-center justify-content-center">
            Adicionar ao Carrinho
          </button>
        </div>
        <!-- Desconto no canto superior esquerdo -->
        <div class="d-flex align-items-center position-absolute top-0 start-0 m-3">
          <div class="bg-danger rounded" style="width: 60px; height: 25px;">
            <div class="text-white d-flex align-items-center">
              <p class="m-auto">-{{ produto.Porcentagem}}%</p>
            </div>
          </div>
        </div>
        <!-- Ícones no canto superior direito -->
        <div class="position-absolute d-flex flex-column" style="top: 10px; right: 10px;">
          <img src="@/assets/imagens/Fill%20Heart.svg" alt="Ícone Superior" style="height: 30px; margin-bottom: 5px;">
          <img src="@/assets/imagens/Fill%20Eye.svg" alt="Ícone Inferior" style="height: 30px;">
        </div>
        <!-- Corpo do Card -->
        <div class="card-body">
          <h5 class="card-title">{{ produto.Nome_Produto}}</h5>
          <div class="card-text d-flex align-items-center">

            <p class="text-danger fw-bold mb-0">R$ {{produto.valorComDesconto}} </p>
            <p class="text-body-tertiary text-decoration-line-through fw-bold ms-3 mb-0">R${{produto.Valor}} und</p>
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
          <p class="text-capitalize mt-1">{{ produto.Descricao }}</p>
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