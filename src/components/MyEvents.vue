<script >

import HeraderAdminEvento from "@/components/HeraderAdminEvento.vue";
import MenuEvento from "@/components/MenuEvento.vue";
import CardEvents from "@/components/CardEvents.vue";
export default {
  components: {CardEvents, MenuEvento, HeraderAdminEvento}

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
    <div class="container-fluid d-flex align-content-start flex-wrap"  style="width: 90%">
      <CardEvents/>
      <CardEvents/>
      <CardEvents/>
      <CardEvents/>
      <CardEvents/>
      <CardEvents/>
    </div>
  </div>
</template>

<style scoped>

</style>