<script>
import HeaderProduto from '@/components/HeaderProduto.vue'
import ProdutoCarrinho from '@/components/ProdutoCarrinho.vue'
import { mapActions } from 'vuex'
import store from '@/store/store.js'

export default {
  components: { ProdutoCarrinho, HeaderProduto },

  computed: {
    store() {
      return store
    }
  },
  async mounted() {
    await this.getprodcarrinho()
  },

  methods:{
    ...mapActions(["getProdutosCarrinho"]),

    async getprodcarrinho() {
      try {
        // console.log(this.store.getters.getProdutosCarrinho);
        return await this.getProdutosCarrinho(this.store.getters.StateToken);
      } catch (error) {
        console.log(error)
      }
    },
  },

}
</script>

<template>
  <div style="min-height: 1200px">
    <div class="container-fluid" style="width: 90%; margin-top: 40px">
      <HeaderProduto />
    </div>

    <div class="container-fluid" style="width: 90%; margin-top: 40px">
      <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-between">
        <div>
          <p class="m-0 ms-2">Produto</p>
        </div>
        <div>
          <p class="m-0">Preço</p>
        </div>
        <div>
          <p class="m-0">Quantidade</p>
        </div>
        <div>
          <p class="m-0 me-2">Subtotal</p>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="width: 90%; margin-top: 40px">
      <ProdutoCarrinho
        v-for="(item, index) in store.getters.getProdutosCarrinho"
        :key="index"
        :data="item"
      />
    </div>

    <div class="container-fluid" style="width: 90%; margin-top: 40px">
      <button class="btn btn-primary">Continuar Comprando</button>
    </div>

    <div
      class="container-fluid d-flex justify-content-between"
      style="width: 90%; margin-top: 40px"
    >
      <div class="d-flex align-self-start">
        <input
          type="text"
          name="cupom"
          id="cupom"
          placeholder="Código do Cupom"
          class="rounded form-control w-50"
        />
        <button class="btn btn-danger ms-3 ps-4 pe-4">Aplicar Cupom</button>
      </div>

      <div class="">
        <div class="border border-2 p-4 rounded">
          <h4>Total do Carrinho</h4>
          <div class="border-bottom pb-2 d-flex justify-content-between mt-2">
            <p class="m-0">SubTotal:</p>
            <p class="m-0">R$700,00</p>
          </div>

          <div class="border-bottom pb-2 d-flex justify-content-between mt-2">
            <p class="m-0">Frete:</p>
            <p class="m-0">Trátis</p>
          </div>

          <div class="border-bottom pb-2 d-flex justify-content-between mt-2">
            <p class="m-0">Total:</p>
            <p class="m-0">R$700,00</p>
          </div>

          <button class="btn btn-danger ps-4 pe-4 m-auto">Ir para o pagamento</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>