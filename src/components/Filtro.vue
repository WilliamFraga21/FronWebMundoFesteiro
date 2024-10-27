<script >
import {mapActions, mapGetters} from "vuex";
import store from "@/store/store.js";

import CarouselHome from "@/components/CarouselHome.vue";
export default {
  components: {CarouselHome},

  computed: {
    store() {
      return store;
    }
  },


  async mounted() {


    await this.getCat()


  },




  methods:{
    ...mapActions([
      "getcategorias"]),
    ...mapGetters(["GetCategorias"]),



    async getCat() {
      try {
        return await this.getcategorias();
      } catch (error) {
        console.log(error)
      }
    },


    pushCat(seuId){
      this.$router.push({ path: "/ProdutosCat", query: { id: seuId } });

    }





  }




}
</script>

<template class="">
  <div class="border-end ">




    <div class="mt-5 me-5">

      <div class="mt-1 me-1" v-for="(item, index) in store.getters.GetCategorias.slice(0, 10)" :key="index">
        <div class="dropdown m-auto" v-if="item.Subcategorias && item.Subcategorias.length > 0">
          <button
              class="btn dropdown-toggle d-flex align-items-center p-0 border-0 bg-transparent text-dark d-grid gap-2"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="pushCat(item.idCategoria)"
          >
            {{ item.Categoria }}
            <i class="bi bi-chevron-down ms-1"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li v-for="(item2, index2) in item.Subcategorias" :key="index2">
              <a class="dropdown-item" href="#" @click="pushCat(item.idSubCategoria)">{{ item2.SubCategoria }}</a>
            </li>
          </ul>
        </div>

        <div class="dropdown m-auto" v-else-if="item.Subcategorias && item.Subcategorias.length === 0">
          <a  @click="pushCat(item.idCategoria)">
            {{ item.Categoria }}
          </a>
        </div>
      </div>



    </div>














  </div>
  <CarouselHome class="" style=""/>
</template>

<style scoped>

</style>