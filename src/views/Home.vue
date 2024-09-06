<script >
import Filtro from "@/components/Filtro.vue";
import PromoRelampago from "@/components/PromoRelampago.vue";
import Categorias from "@/components/Categorias.vue";
import ProdutosMaisVendidoHome from "@/components/ProdutosMaisVendidoHome.vue";
export default {
  components: {ProdutosMaisVendidoHome, Categorias, PromoRelampago, Filtro}

}
</script>

<template >
  <div class="container-fluid d-flex" style="width: 90%;">

    <Filtro class="" style="width: 200px;margin-bottom: 130px"/>

  </div>

  <div class="container-fluid " style="width: 90%;">


   <PromoRelampago/>

  </div>
  <div class="container-fluid " style="width: 90%;">

  <Categorias/>

  </div>

  <div class="container-fluid " style="width: 90%;">

   <ProdutosMaisVendidoHome/>

  </div>

  <div class="container-fluid " style="width: 90%;">

    <div class="d-flex flex-wrap justify-content-around mb-5 ">

      <div class="col-12 col-md-3 d-flex flex-column align-items-center m-2" style="">
        <img src="../assets/imagens/Services.svg" alt="" class="img-fluid" style="height: 80px; width: 80px;">
        <h5 class="m-0 text-center">ENTREGA GRATUITA E RÁPIDA</h5>
        <p class="m-0 text-center" style="font-size: small">Entrega gratuita para todos os pedidos acima de R$ 100</p>
      </div>
      <div class="col-12 col-md-3 d-flex flex-column align-items-center m-2" style="">
        <img src="../assets/imagens/Services%20(1).svg" alt="" class="img-fluid" style="height: 80px; width: 80px;">
        <h5 class="m-0 text-center">ATENDIMENTO AO CLIENTE 24/7</h5>
        <p class="m-0 text-center" style="font-size: small">Suporte ao cliente amigável 24/7</p>
      </div>
      <div class="col-12 col-md-3 d-flex flex-column align-items-center m-2" style="">
        <img src="../assets/imagens/Services%20(2).svg" alt="" class="img-fluid" style="height: 80px; width: 80px;">
        <h5 class="m-0 text-center">GARANTIA DE DEVOLUÇÃO DE DINHEIRO</h5>
        <p class="m-0 text-center" style="font-size: small">Devolvemos o dinheiro em 30 dias</p>
      </div>
    </div>



  </div>
</template>

<style scoped>

</style>