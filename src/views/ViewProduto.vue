<script >
import HeaderProduto from "@/components/HeaderProduto.vue";
import CardProdutoView from "@/components/CardProdutoView.vue";
export default {
  components: {CardProdutoView, HeaderProduto}

}
</script>

<template>


  <div class="container-fluid " style="width: 90%;">

  <HeaderProduto/>


  </div>
  <div class="container-fluid " style="width: 90%;">

  <CardProdutoView/>


  </div>
</template>

<style scoped>

</style>