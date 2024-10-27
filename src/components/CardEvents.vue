<script >
import ModalEditEvent from "@/components/ModalEditEvent.vue";

export default {
  components: { ModalEditEvent},

  props:{
    data: Array
  }
}
</script>

<template>

  <div class="p-1">
    <div class="card" style="width: 18rem;">
      <img style="max-height: 20rem;min-height: 15rem" v-if="data.photo == null" src="https://www.espacomatodentro.com.br/wp-content/uploads/2019/07/espaco-para-eventos-em-campinas.jpg" class="card-img-top" alt="https://www.espacomatodentro.com.br/wp-content/uploads/2019/07/espaco-para-eventos-em-campinas.jpg">
      <img style="max-height: 20rem;min-height: 15rem"  v-else-if="data.photo !== null" :src="data.photo" class="card-img-top" :alt="data.photo">
      <div class="card-body">
        <h5 class="card-title">{{ data.evento.nomeEvento }}</h5>
        <p class="card-text">{{ data.evento.descricaoEvento }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-info fw-bold" v-for="(item, index) in data.profissao" :key="index">
          {{ item.profissao }}  {{item.quantidade}}</li>
      </ul>
      <div class="card-body d-grid gap-2">
        <a href="#" class="btn btn-warning " data-bs-toggle="modal" :data-bs-target="'#staticBackdrop'+data.evento.id">Editar</a>
        <ModalEditEvent :datamodal="data" :id="data.evento.id"></ModalEditEvent>
      </div>
      <div class="card-footer text-body-secondary">
        2 dias atras
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>