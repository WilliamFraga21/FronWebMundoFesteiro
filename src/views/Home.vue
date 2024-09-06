<script >
import Filtro from "@/components/Filtro.vue";
import PromoRelampago from "@/components/PromoRelampago.vue";
export default {
  components: {PromoRelampago, Filtro}

}
</script>

<template >
  <div class="container-fluid d-flex" style="width: 90%;">

    <Filtro class="" style="width: 200px;margin-bottom: 130px"/>

  </div>

  <div class="container-fluid " style="width: 90%;">


   <PromoRelampago/>

  </div>
</template>

<style scoped>

</style>