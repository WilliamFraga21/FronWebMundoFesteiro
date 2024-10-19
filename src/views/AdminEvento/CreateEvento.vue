<script >
import MenuAdmin from "@/components/MenuAdmin.vue";
import FormCreateProduto from "@/components/FormCreateProduto.vue";
import HeraderAdminEvento from "@/components/HeraderAdminEvento.vue";
import MenuEvento from "@/components/MenuEvento.vue";
import FormCreateEvento from "@/components/FormCreateEvento.vue";
export default {
  components: {FormCreateEvento, MenuEvento, HeraderAdminEvento, FormCreateProduto, MenuAdmin}

}
</script>

<template>


  <div class="container-fluid d-flex"  style="width: 90%">
    <HeraderAdminEvento/>
  </div>

  <div class="container-fluid d-flex"  style="width: 90%">

    <div class="" style="max-width: 350px">

      <MenuEvento/>
    </div>
    <div class="container-fluid d-flex"  style="width: 90%">
      <FormCreateEvento/>
    </div>
  </div>
</template>

<style scoped>

</style>