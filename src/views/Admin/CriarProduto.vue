<script >
import MenuAdmin from "@/components/MenuAdmin.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import FormCreateProduto from "@/components/FormCreateProduto.vue";
export default {
  components: {FormCreateProduto, HeaderAdmin, MenuAdmin}

}
</script>

<template>


  <div class="container-fluid d-flex"  style="width: 90%">
  <HeaderAdmin/>
  </div>

  <div class="container-fluid d-flex"  style="width: 90%">

    <div class="" style="max-width: 350px">

      <MenuAdmin/>
    </div>
    <div class="container-fluid d-flex"  style="width: 90%">
      <FormCreateProduto/>
    </div>
  </div>
</template>

<style scoped>

</style>