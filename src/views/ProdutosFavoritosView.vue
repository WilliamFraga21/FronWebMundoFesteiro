<template>
  <div> <!-- Envolvendo tudo dentro de um único div -->
    <div class="container-fluid d-flex" style="width: 90%;">
      <Filtro style="width: 200px; margin-bottom: 130px" />
    </div>


    <div class="container-fluid" style="width: 90%;">
      <ProdutosCatComponent  :produtos="store.getters.getProdutosFav"/>
    </div>



  </div> <!-- Fechando o div raiz -->
</template>

<script >
import Filtro from "@/components/Filtro.vue";

import ProdutosCatComponent from "@/components/ProdutosCatComponent.vue";
import {mapActions, mapGetters} from "vuex";
import store from "@/store/store.js";
export default {
  name: "HomePage",
  components: {ProdutosCatComponent, Filtro},

  computed: {
    store() {
      return store;
    }
  },

  data(){
    return{
      idCat:null,
    }
  },

  async mounted() {



    await this.getCat()


  },

  methods:{
    ...mapActions([
      "getProdutosFavortios"]),
    ...mapGetters(["getProdutosFav"]),



    async getCat() {
      try {
        return await this.getProdutosFavortios(store.getters.StateToken);
      } catch (error) {
        console.log(error)
      }
    },
  }



}
</script>

<style scoped>

</style>