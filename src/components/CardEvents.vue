<script >
import ModalEditEvent from "@/components/ModalEditEvent.vue";

export default {
  components: {ModalEditEvent}

}
</script>

<template>

  <div class="p-1">
    <div class="card" style="width: 18rem;">
      <img src="https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg" class="card-img-top" alt="https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg">
      <div class="card-body">
        <h5 class="card-title">Alisan Parque Show Ana Castela</h5>
        <p class="card-text">Show de Sertanejo das 05:00am até as 4:00am são 10 dias </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-info fw-bold">Garson 10 Vagas</li>
        <li class="list-group-item text-info fw-bold">Segurança 150 Vagas</li>
        <li class="list-group-item text-info fw-bold">Barmen 30 Vagas</li>
      </ul>
      <div class="card-body d-grid gap-2">
        <a href="#" class="btn btn-warning " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editar</a>
      </div>
      <div class="card-footer text-body-secondary">
        2 dias atras
      </div>
    </div>
    <ModalEditEvent></ModalEditEvent>
  </div>
</template>

<style scoped>

</style>