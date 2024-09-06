<script >

import CarouselHome from "@/components/CarouselHome.vue";
export default {
  components: {CarouselHome}

}
</script>

<template class="">
  <div class="border-end ">
    <div class="dropdown m-auto mt-5 me-5" >
      <button
          class="btn dropdown-toggle d-flex align-items-center p-0 border-0 bg-transparent text-dark d-grid gap-2"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
      >
        Doces
        <i class="bi bi-chevron-down ms-1"></i> <!-- Ícone de seta apontando para baixo -->
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Item 1</a></li>
        <li><a class="dropdown-item" href="#">Item 2</a></li>
        <li><a class="dropdown-item" href="#">Item 3</a></li>
      </ul>
    </div>
    <div class="dropdown m-1">
      <button
          class="btn dropdown-toggle d-flex align-items-center p-0 border-0 bg-transparent text-dark d-grid gap-2"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
      >
        Salgados
        <i class="bi bi-chevron-down ms-1"></i> <!-- Ícone de seta apontando para baixo -->
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Item 1</a></li>
        <li><a class="dropdown-item" href="#">Item 2</a></li>
        <li><a class="dropdown-item" href="#">Item 3</a></li>
      </ul>
    </div>

    <div class="m-1">
      <a>
        Kits Festa
      </a>
    </div>

    <div class="m-1">
      <a>
        Bolos
      </a>
    </div>
    <div class="m-1">
      <a>
        Temáticas
      </a>
    </div>
    <div class="m-1">
      <a>
        Cor
      </a>
    </div>
    <div class="m-1">
      <a>
        Fantasias
      </a>
    </div>
    <div class="m-1">
      <a>
        Velas
      </a>
    </div>
    <div class="m-1">
      <a>
        Utensílios
      </a>
    </div>


  </div>
  <CarouselHome class="" style=""/>
</template>

<style scoped>

</style>