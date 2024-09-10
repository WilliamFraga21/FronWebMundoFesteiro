<script >


import CardItensPedido from "@/components/CardItensPedido.vue";

export  default {
  components: {CardItensPedido}

}
</script>

<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cliente: William</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div>

            <p class="m-0 fw-bold ">
              Endereço:
            </p>

            <p class="m-0 text-secondary ">
              Rua: Av irecê
            </p>

            <p class="m-0 text-secondary ">
              Cidade: São Paulo
            </p>
            <p class="m-0 text-secondary ">
              Estado: São Paulo
            </p>
            <p class="m-0 text-secondary ">
              Bairro: Guarapiranga
            </p>
            <p class="m-0 text-secondary ">
              CEP: 04911060
            </p>
            <p class="m-0 text-secondary ">
              Número: 60
            </p>
            <p class="m-0 fw-bold ">
              Informações do Cliente:
            </p>
            <p class="m-0 text-secondary ">
              Nome: William Fraga
            </p>
            <p class="m-0 text-secondary ">
              Telefone: (11) 97041-5085
            </p>

            <p class="m-0 text-secondary ">
              Email: Williamfragaconta@gmail.com
            </p>

            <p class="m-0 fw-bold ">
              Informações do Pedido:
            </p>




            <div class="d-flex flex-wrap ">










              <CardItensPedido class="m-auto mt-2"/>
              <CardItensPedido class="m-auto mt-2"/>
              <CardItensPedido class="m-auto mt-2"/>
              <CardItensPedido class="m-auto mt-2"/>
              <CardItensPedido class="m-auto mt-2"/>


            </div>



           <div class="d-flex mt-3">
             <p class="m-0 fw-bold ">
               Entregue dia:
             </p>

             <p class="m-0 text-secondary ms-2 ">
               09/09/2024
             </p>
           </div>


            <div class="mt-3 d-flex container-fluid">
              <button type="button" class="btn btn-warning m-auto" >Em Preparo(Pendente)</button>
              <button type="button" class="btn btn-info m-auto" >Enviado</button>
              <button type="button" class="btn btn-success m-auto" >Entregue</button>
            </div>




          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>