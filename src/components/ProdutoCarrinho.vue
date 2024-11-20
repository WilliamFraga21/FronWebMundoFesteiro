<script >

export default {
  data() {
    return {
      count: 1, // Valor inicial do contador
    };
  },

  props: {
    data: Object,
  },

  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
};
</script>

<template>
  <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center img-item">
      <button type="button" class="btn-close dellItem " aria-label="Close"></button>
      <div>
        <img src="../assets/imagens/image3.svg" alt="" style="height: 54px;width: 54px" class="ms-2 ">
      </div>
      <p class="m-0 ms-2">
        {{data.Nome_Produto}}
      </p>
    </div>
    <div>
      <p class="m-0">
        {{data.Valor_Uni}}
      </p>
    </div>
    <div class="counter-container">
      <div class="counter-value">{{ count }}</div>
      <div class="counter-buttons">
        <button class="counter-button arrow-up" @click="increase"></button>
        <button class="counter-button arrow-down" @click="decrease"></button>
      </div>
    </div>
    <div>
      <p class="m-0 me-2">
      {{count * data.Valor}}
      </p>
    </div>
  </div>
</template>

<style scoped>
.dellItem{
  display: none;
}
.img-item:hover .dellItem{
  display: flex;

}


.counter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 72px;
  height: 44px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
}

.counter-value {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 30px;
}

.counter-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.counter-button {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  transition: transform 0.2s ease;
}

.counter-button:hover {
  transform: scale(1.1);
}

.arrow-up::before {
  content: '▲';
  font-size: 12px;
}

.arrow-down::before {
  content: '▼';
  font-size: 12px;
}
</style>