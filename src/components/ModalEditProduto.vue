<script>


export default {

}
</script>

<template>
  <!-- Button trigger modal -->
<!--  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">-->
<!--    Launch static backdrop modal-->
<!--  </button>-->

  <!-- Modal -->
  <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Editando Bringadeiro</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">


          <div class="container-fluid ">


            <div class="d-flex justify-content-between ">
              <div class="form-floating mb-3 w-50">
                <input type="text" class="form-control" id="floatingInput" placeholder="Nome do Produto">
                <label for="floatingInput">Nome do Produto</label>
              </div>
              <div class="form-floating w-50 ms-3">
                <textarea class="form-control" placeholder="Descrição" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Descrição</label>

              </div>



              <div class="form-floating w-50 ms-3">
                <select class="form-select" id="floatingSelect" aria-label="SubCategoria">
                  <option selected>SubCategoria</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">SubCategoria</label>
              </div>

            </div>




           <div class="d-flex mt-3">


             <div class="form-check me-3">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
               <label class="form-check-label" for="flexRadioDefault1">
                 Azul
               </label>
             </div>
             <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
               <label class="form-check-label" for="flexRadioDefault2">
                 Vermelho
               </label>
             </div>




           </div>



            <div class="mt-3">

             <div class="d-flex">
               <div class="form-floating mb-3 w-25">
                 <input type="text" class="form-control" id="floatingInput" placeholder="Estoque">
                 <label for="floatingInput">Estoque</label>
               </div>



               <div class="form-floating w-25 ms-3">
                 <select class="form-select" id="floatingSelect" aria-label="Tamanho">
                   <option selected>Tamanho</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                 </select>
                 <label for="floatingSelect">Tamanho</label>
               </div>


             </div>






                <div class="input-group mb-3 w-25">
                  <span class="input-group-text">$</span>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
<!--                  <span class="input-group-text">.00</span>-->

                </div>



                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Status do Produto (Disponivel/Não Disponivel)</label>
                </div>




              <div class="mt-5">
                <p class="m-0 text-danger fw-bold">Imagens:</p>
              </div>


              <div class="input-group mb-3 mt-3">
                <input type="file" class="form-control" id="inputGroupFile02">
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
              </div>


              <div class="mt-2">
                <button type="button" class="btn btn-primary">Enviar Foto</button>
              </div>


              <div class="mt-2">
                <p class="m-0">
                  Limite de 5 imagens:
                </p>
              </div>



             <div class="d-flex mt-4">

               <div class="me-2 mt-2">

                 <div>
                   <div class="card" style="width: 18rem;">
                     <img src="../assets/imagens/Vector.svg" class="card-img-top" alt="">
                     <div class="card-body d-grid gap-2">
                       <a href="#" class="btn btn-danger">Deletar</a>
                     </div>
                   </div>
                 </div>
               </div>



             </div>


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