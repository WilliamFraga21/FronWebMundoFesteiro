<script >
import MenuAdmin from "@/components/MenuAdmin.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import CreateCategoriaTamanho from "@/components/CreateCategoriaTamanho.vue";
export default {
  components: {CreateCategoriaTamanho, HeaderAdmin, MenuAdmin}

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
      <CreateCategoriaTamanho/>
    </div>
  </div>
</template>

<style scoped>

</style>