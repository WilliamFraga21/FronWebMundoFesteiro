<script >
import EditPerfil from "@/components/EditPerfil.vue";
import HeaderMinhaConta from "@/components/HeaderMinhaConta.vue";
import MenuMinhaConta from "@/components/MenuMinhaConta.vue";
export default {
  components: {MenuMinhaConta, HeaderMinhaConta, EditPerfil}

}
</script>

<template>


  <div class="container-fluid d-flex"  style="width: 90%">
    <HeaderMinhaConta/>
  </div>

  <div class="container-fluid d-flex"  style="width: 90%">

    <div class="" style="max-width: 350px">

      <MenuMinhaConta/>
    </div>
    <div class="container-fluid d-flex"  style="width: 90%">
      <EditPerfil/>
    </div>
  </div>
</template>

<style scoped>

</style>