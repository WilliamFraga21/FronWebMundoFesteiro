<template>
  <div class="mb-5 mt-5">
    <div class="d-flex align-items-center">
      <div class="bg-danger rounded" style="width: 20px; height: 40px;"></div>
      <div class="text-danger d-flex align-items-center">
        <p class="mb-0 ms-3">Hoje</p>
      </div>
    </div>

    <div class="mt-3">
      <h2 class="promo-title">Promoção Relâmpago</h2>
      <div class="promo-timer d-flex align-items-center">
        <div class="time-unit text-center">
          <div class="label">Dias</div>
          <div class="value">{{ days }}</div>
        </div>
        <span class="separator text-danger">:</span>
        <div class="time-unit text-center">
          <div class="label">Horas</div>
          <div class="value">{{ hours }}</div>
        </div>
        <span class="separator text-danger">:</span>
        <div class="time-unit text-center">
          <div class="label">Minutos</div>
          <div class="value">{{ minutes }}</div>
        </div>
        <span class="separator text-danger">:</span>
        <div class="time-unit text-center">
          <div class="label">Segundos</div>
          <div class="value">{{ seconds }}</div>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center mt-3">
      <img
        v-if="currentIndex > 0"
        @click="scrollLeft"
        class="arrow"
        src="@/assets/imagens/ArrowLeft.svg"
        alt="Seta Esquerda"
        style="width: 46px; height: 46px; margin-right: 1rem; cursor: pointer;"
      />
      <div class="carousel-container" ref="carouselContainer">
        <div class="carousel-wrapper" :style="carouselStyle">
          <CardPromoHome
            v-for="(item, index) in visibleProducts"
            :key="index"
            :produto="item"
            class="card-promo"
          />
        </div>
      </div>
      <img
        v-if="currentIndex < totalProducts - 5"
        @click="scrollRight"
        class="arrow"
        src="@/assets/imagens/ArrowRight.svg"
        alt="Seta Direita"
        style="width: 46px; height: 46px; margin-left: 1rem; cursor: pointer;"
      />
    </div>

    <div class="d-grid gap-2 col-6 mx-auto mt-4" style="max-width: 15rem">
      <button type="button" class="btn btn-danger">Ver Todos Produtos</button>
    </div>
  </div>
</template>

<script>
import CardPromoHome from "@/components/CardPromoHome.vue";
import { mapActions, mapGetters } from "vuex";
import store from "@/store/store.js";

export default {
  components: { CardPromoHome },
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      idPromo: 1,
      endTime: null,
      currentIndex: 0,
    };
  },
  computed: {
    store() {
      return store;
    },
    totalProducts() {
      return this.store.getters.getProdutosPromocao.length;
    },
    visibleProducts() {
      return this.store.getters.getProdutosPromocao.slice(
        this.currentIndex,
        this.currentIndex + 5
      );
    },
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100 / 5}%)`,
        transition: "transform 0.3s ease",
      };
    },
  },
  async mounted() {
    await this.fetchProdutosPromocao(this.idPromo);
    if (typeof this.setEndTime === 'function') {
      this.setEndTime();
    } else {
      console.error("Método 'setEndTime' não encontrado.");
    }
  },
  methods: {
    ...mapActions(['fetchProdutosPromocao']),
    ...mapGetters(['getProdutosPromocao']),
    setEndTime() {
      const produto = this.store.getters.getProdutosPromocao[0];
      if (produto && produto.Tempo) {
        this.endTime = new Date(produto.Tempo).getTime();
        this.startTimer();
      } else {
        console.error("Campo 'Tempo' não encontrado no produto.");
      }
    },
    startTimer() {
      if (!this.endTime) return;

      setInterval(() => {
        const now = new Date().getTime();
        const timeDiff = this.endTime - now;

        if (timeDiff > 0) {
          this.days = this.formatTime(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
          this.hours = this.formatTime(Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          this.minutes = this.formatTime(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
          this.seconds = this.formatTime(Math.floor((timeDiff % (1000 * 60)) / 1000));
        } else {
          this.days = this.hours = this.minutes = this.seconds = "00";
        }
      }, 1000);
    },
    formatTime(unit) {
      return unit < 10 ? "0" + unit : unit;
    },
    scrollLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    scrollRight() {
      if (this.currentIndex < this.totalProducts - 5) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style scoped>
.promo-timer {
  display: flex;
  justify-content: left;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
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
  display: flex;
  justify-content: center;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.3s ease;
}

.card-promo {
  margin: 0 10px; /* Margem entre os cards */
}

/* Ajustes para telas menores */
@media (max-width: 768px) {
  .card-promo {
    min-width: 100px; /* Largura mínima dos cards */
  }

  /* Quebra de linha para título e cronômetro */
  .promo-title {
    text-align: left; /* Centraliza o título */
    margin-bottom: 1rem; /* Espaço entre título e cronômetro */
  }

  .promo-timer {
    flex-direction: row; /* Alinha o cronômetro em coluna */
  }
}

@media (max-width: 576px) {
  .card-promo {
    min-width: 70px; /* Largura mínima dos cards */
  }
}
</style>

