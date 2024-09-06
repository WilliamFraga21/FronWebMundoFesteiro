<script>
import CardPromoHome from "@/components/CardPromoHome.vue";
export default {
  components: { CardPromoHome },
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      setInterval(() => {
        const endTime = new Date("2024-12-31T23:59:59").getTime();
        const now = new Date().getTime();
        const timeDiff = endTime - now;

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
        <p class="mb-0 ms-3">Hoje</p>
      </div>
    </div>

    <div class="d-flex justify-content-between mt-3">
      <div>
        <h2>Promoção Relâmpago</h2>
      </div>
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

    <div class="carousel-container" ref="carouselContainer">
      <div class="carousel-wrapper d-flex">
        <CardPromoHome/>
        <CardPromoHome/>
        <CardPromoHome/>
        <CardPromoHome/>
        <CardPromoHome/>
        <CardPromoHome/>
        <CardPromoHome/>
      </div>
    </div>

    <div class="d-grid gap-2 col-6 mx-auto mt-4" style="max-width: 15rem">
      <button type="button" class="btn btn-danger">Ver Todos Produtos</button>
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
