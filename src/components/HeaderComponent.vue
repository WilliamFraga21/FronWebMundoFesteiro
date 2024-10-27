<script >
import store from "@/store/store.js";
import {mapActions, mapGetters} from "vuex";
export default {

  computed:{
    store(){
      return store;
    }
  },

  async mounted() {
    await this.validtoken()
  },

  methods:{

    ...mapActions(["ifToken"]),
    ...mapGetters(["StateToken"]),

    async validtoken() {
      try {

        return await this.ifToken(this.store.getters.StateToken);
      } catch (error) {
        this.$router.push(`/login`);
        console.log(error)
      }
    },





    token(rota){
      if(this.store.getters.StateToken !== null){
        console.log("trueeeee")
        this.$router.push(`/${rota}`).then(() => {
          window.location.reload();
        });
      }else{
        console.log("falseeeeee")
        this.$router.push('/login').then(() => {
          window.location.reload();
        });
      }
    }

  },




}


</script>

<template>
  <header class="d-flex justify-content-center border-bottom border-2" style="height: auto;">
    <div class="container-fluid" style="width: 90%;">
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <!-- Logo Section -->
        <div class="d-flex justify-content-center align-items-center" style="height: 100px;">
          <img src="../assets/imagens/MUNDO.png" alt="Logo" class="img-fluid" style="height: 80px;" @click="token('')">
        </div>

        <!-- Navigation Links -->
        <div class="d-flex justify-content-center align-items-center flex-grow-1 flex-wrap">
          <nav class="d-flex flex-wrap justify-content-center align-items-center" style="height: 40px;">
            <a class="nav-link ms-2 me-2" href="#" @click="token('')" >Home</a>
            <a class="nav-link ms-2 me-2" href="#" @click="token('')">Contato</a>
            <a class="nav-link ms-2 me-2" href="#" @click="token('')">Sobre</a>
            <a class="nav-link ms-2 me-2" href="#" @click="token('cadastro')">Cadastrar</a>
            <a class="nav-link ms-2 me-2" href="#" @click="token('')">Blog</a>
          </nav>
        </div>

        <!-- Search and Icons Section -->
        <div class="d-flex justify-content-end align-items-center flex-wrap" style="gap: 10px;">
          <div class="input-group" style="max-width: 250px;">
            <input class="form-control" list="cities" id="exampleDataList" placeholder="Type to search...">
            <span class="input-group-text">
            <img src="../assets/imagens/big-search-len.png" alt="Search Icon" class="img-fluid" style="height: 24px;">
          </span>
            <datalist id="cities">
              <option value="Seattle">Seattle</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </datalist>
          </div>


          <span class="d-flex justify-content-center align-items-center"  @click="token('')">
            <img src="../assets/imagens/Wishlist.svg" alt="Wishlist Icon" class="img-fluid" style="height: 24px;">
          </span>





          <button class="btn d-flex justify-content-center align-items-center ms-3 position-relative" @click="token('carrinho')">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
            <span class=""><img src="../assets/imagens/Cart1.svg" alt="User Icon" class="img-fluid" style="height: 24px;"></span>

          </button>




         <div>

           <button class="btn dropdown-toggle d-flex justify-content-center align-items-center ms-3 me-3 "    @click="token('minhaconta')" >
             <span class=""><img src="../assets/imagens/user.svg" alt="User Icon" class="img-fluid" style="height: 24px;"></span>

           </button>







                 <ul class="dropdown-menu dropdown-menu-dark" style="background-color: rgba(0, 0, 0, 0.70)">
                   <li><a class="dropdown-item" href="#"><img src="../assets/imagens/userBranco.svg" alt="">Gerenciar minha conta</a></li>
                   <li><a class="dropdown-item" href="#"><img src="../assets/imagens/icon-mallbag.svg" alt=""> Meus Pedidos</a></li>
                   <li><a class="dropdown-item" href="#"><img src="../assets/imagens/Icon-Reviews.svg" alt=""> Meus Favoritos</a></li>
                   <li><a class="dropdown-item" href="#"><img src="../assets/imagens/Icon-logout.svg" alt=""> Sair</a></li>
                 </ul>







         </div>



<!--          <span class="d-flex justify-content-center align-items-center ms-3 me-3">-->
<!--            <img src="../assets/imagens/user.svg" alt="User Icon" class="img-fluid" style="height: 24px;">-->
<!--          </span>-->
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>

</style>