<script >
import MenuAdmin from "@/components/MenuAdmin.vue";
import HeraderAdmin from "@/components/HeraderAdmin.vue";
import EditPerfil from "@/components/EditPerfil.vue";
export default {
  components: {EditPerfil, HeraderAdmin, MenuAdmin}

}
</script>

<template>


  <div class="container-fluid d-flex"  style="width: 90%">
  <HeraderAdmin/>
  </div>

  <div class="container-fluid d-flex"  style="width: 90%">

    <div class="" style="max-width: 350px">

      <MenuAdmin/>
    </div>
    <div class="container-fluid d-flex"  style="width: 90%">
      <EditPerfil/>
    </div>
  </div>
</template>

<style scoped>

</style>