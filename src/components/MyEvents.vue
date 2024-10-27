<script >

import HeraderAdminEvento from "@/components/HeraderAdminEvento.vue";
import MenuEvento from "@/components/MenuEvento.vue";
import CardEvents from "@/components/CardEvents.vue";

import store from "@/store/store.js";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {CardEvents, MenuEvento, HeraderAdminEvento},



  computed:{
    store(){
      return store;
    }
  },

  async mounted() {
    await this.geteventos()
  },

  methods:{

    ...mapActions([
      "clearAddressData","getProfessions","getEventosMe"]),
    ...mapGetters(["GetProfessions","GetMyEventos"]),

    async geteventos() {
      try {
        return await this.getEventosMe(this.store.getters.StateToken);
      } catch (error) {
        console.log(error)
      }
    },

  },

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

      <CardEvents v-for="(item, index) in store.getters.GetMyEventos" :key="index" :data="item"/>
    </div>
  </div>
</template>

<style scoped>

</style>