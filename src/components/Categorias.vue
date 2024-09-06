<script>
export default {
  components: {  },


  methods: {


    scrollLeft() {
      const container = this.$refs.carouselContainer;
      container.scrollBy({ left: -container.offsetWidth * 0.8, behavior: 'smooth' });
    },
    scrollRight() {
      const container = this.$refs.carouselContainer;
      container.scrollBy({ left: container.offsetWidth * 0.8, behavior: 'smooth' });
    }
  },
};
</script>

<template>
  <div class="mb-5 mt-5">
    <div class="d-flex align-items-center">
      <div class="bg-danger rounded" style="width: 20px; height: 40px;"></div>
      <div class="text-danger d-flex align-items-center">
        <p class="mb-0 ms-3">Categorias</p>
      </div>
    </div>

    <div class="d-flex justify-content-between mt-3">
      <div>
        <h2>Navegar por categoria</h2>
      </div>

      <div class="d-flex">
        <div class="ms-3 me-2" @click="scrollLeft">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </div>
        <div class="ms-3 me-2" @click="scrollRight">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="carousel-container mt-3" ref="carouselContainer">
      <div class="carousel-wrapper">


        <div
            style="height: 145px; width: 170px"
            class="border border-2 rounded d-flex align-items-center m-0 ms-2 selectCat"
        >
          <div class="m-auto">
            <img
                src="../assets/imagens/icons8-festa-50.svg"
                alt="Ícone de Festa"
                class="icon-image"
            />
            <p class="m-0 text-center">Doces</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>


.carousel-container {
  overflow: hidden;
  position: relative;
}
.selectCat {
  transition: background-color 0.3s ease;
  background-color: transparent; /* Fundo inicial transparente */
  cursor: pointer; /* Cursor de mãozinha ao passar o mouse */
}

.selectCat:hover {
  background-color: rgba(220, 53, 69, 1); /* Cor de fundo ao passar o mouse */
  color: white;
}

.selectCat:hover .icon-image {
  filter: invert(1); /* Troca a cor da imagem de preto para branco */
}

.carousel-wrapper {
  display: flex;
  white-space: nowrap;
  transition: transform 0.3s ease;
}

.carousel-wrapper > * {
  flex: 0 0 auto;
  margin-right: 10px; /* Adjust spacing between cards if needed */
}

@media (max-width: 768px) {
  .carousel-wrapper {
    /* Adjust card size and spacing for smaller screens */
    font-size: 14px;
  }

  .carousel-wrapper > * {
    flex: 0 0 auto;
    margin-right: 5px; /* Reduce spacing for smaller screens */
  }


}

@media (max-width: 576px) {
  .carousel-wrapper {
    font-size: 12px;
  }

  .carousel-wrapper > * {
    flex: 0 0 auto;
    margin-right: 3px; /* Further reduce spacing for mobile screens */
  }

}
</style>
