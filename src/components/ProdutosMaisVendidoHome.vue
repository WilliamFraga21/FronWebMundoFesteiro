<script>
import CardProdutos from "@/components/CardProdutos.vue";
export default {
  components: { CardProdutos },

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
        <p class="mb-0 ms-3">Esse Mês</p>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
      <div>
        <h2>Produtos Mais Vendidos</h2>
      </div>


        <button type="button" class="btn btn-danger">Ver Todos</button>


    </div>

    <div class="carousel-container" ref="carouselContainer ">
      <div class="carousel-wrapper d-flex">
        <CardProdutos/>
        <CardProdutos/>
        <CardProdutos/>
        <CardProdutos/>
        <CardProdutos/>
      </div>
    </div>


  </div>
</template>

<style scoped>
.promo-timer {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  min-width: 60px;
}

.label {
  font-size: 12px;
  margin-bottom: 5px;
}

.value {
  font-size: 24px;
  font-weight: bold;
}

.separator {
  font-size: 30px;
  color: red;
  font-weight: bold;
}

.carousel-container {
  overflow: hidden;
  position: relative;
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

  .promo-timer {
    flex-direction: column;
    align-items: center;
    font-size: 14px;
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

  .promo-timer {
    font-size: 12px;
  }
}
</style>
