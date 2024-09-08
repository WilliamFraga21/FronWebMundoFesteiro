<script >
import HeaderProduto from "@/components/HeaderProduto.vue";
import CardProdutoView from "@/components/CardProdutoView.vue";
import CardProdutos from "@/components/CardProdutos.vue";
export default {
  components: {CardProdutos, CardProdutoView, HeaderProduto}

}
</script>

<template>



  <div style="min-height: 1200px">
    <div class="container-fluid " style="width: 90%;margin-top: 40px">
      <HeaderProduto/>
    </div>
    <div class="container-fluid " style="width: 90%;margin-top: 40px">
      <CardProdutoView/>
    </div>



    <div class="container-fluid mt-5" style="width: 80%">

      <div class="d-flex align-items-center">
        <div class="bg-danger rounded" style="width: 20px; height: 40px;"></div>
        <div class="text-danger d-flex align-items-center">
          <p class="mb-0 ms-3 text-danger fw-bold">Itens relacionados</p>
        </div>
      </div>

      <div class="carousel-container " ref="carouselContainer ">
        <div class="carousel-wrapper d-flex">
          <CardProdutos class="m-3 "/>
          <CardProdutos class="m-3"/>
          <CardProdutos class="m-3"/>
          <CardProdutos class="m-3"/>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>

</style>