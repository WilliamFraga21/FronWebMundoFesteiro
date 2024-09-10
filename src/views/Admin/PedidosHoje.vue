<script >
import MenuAdmin from "@/components/MenuAdmin.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import CardPedidosHoje from "@/components/CardPedidosHoje.vue";
export default {
  components: {CardPedidosHoje, HeaderAdmin, MenuAdmin}

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
          Pedidos Feitos Hoje:
        </p>
      </div>


      <div class="d-flex mt-2">


        <CardPedidosHoje/>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>