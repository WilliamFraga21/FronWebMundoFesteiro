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
      <img src="https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg" class="card-img-top" alt="https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg">
      <div class="card-body">
        <h5 class="card-title">{{ data.evento.nomeEvento }}</h5>
        <p class="card-text">{{ data.evento.descricaoEvento }}</p>
      </div>
      {{data.evento.id}}
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-info fw-bold" v-for="(item, index) in data.profissao" :key="index">
          {{ item.profissao }}  {{item.quantidade}}</li>
        <li class="list-group-item text-info fw-bold">Segurança 150 Vagas</li>
        <li class="list-group-item text-info fw-bold">Barmen 30 Vagas</li>
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