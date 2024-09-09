<script >
import MenuAdmin from "@/components/MenuAdmin.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import EditProduto from "@/components/EditProduto.vue";
export default {
  components: {EditProduto, HeaderAdmin, MenuAdmin}

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
    <div class="container-fluid "  style="width: 90%">

      <div>
        <p class="fw-bold text-danger m-0">
          Editar Produto
        </p>
      </div>


      <div class="d-flex">

      <EditProduto class="m-1"/>
      <EditProduto class="m-1"/>
      <EditProduto class="m-1"/>
      <EditProduto class="m-1"/>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>