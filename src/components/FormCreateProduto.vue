<script >

export default {

};

</script>

<template>

  <div class="container-fluid">
    <div>
      <p class="m-0 fw-bold text-danger">
        Cria Produto
      </p>
    </div>
    <div class="">


      <div class="">


        <div class="row g-3">
          <div class="col">
            <input type="text" class="form-control" placeholder="Nome do Produto" aria-label="First name">
          </div>
          <div class="col">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>

      </div>

      <div class="">
        <label for="inputState" class="form-label">Categoria</label>
        <select id="inputState" class="form-select">
          <option selected>Categorias</option>
          <option>...</option>
        </select>
      </div>



        <div class="mt-2">
          <label for="inputState" class="form-label">SubCategoria</label>
          <select id="inputState" class="form-select">
            <option selected>SubCategorias</option>
            <option>...</option>
          </select>
        </div>


        <div class=" d-flex justify-content-end mt-3">
          <button type="submit" class="btn btn-primary me-5 ">Criar</button>
        </div>


    </div>



    <div class=" mt-4">


      <div>
        <p class="m-0 fw-bold text-danger">
          Cria Produto Variação
        </p>
      </div>

      <div class="col-md-4 mt-2">
        <label for="inputState" class="form-label">Selecione o Produto:</label>
        <select id="inputState" class="form-select custom-select">
          <option selected>Produtos</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>


        </select>
      </div>

      <div class="row g-3 mt-1">




        <div class="col">
          <label for="inputState" class="form-label">Tamanho</label>
          <select id="inputState" class="form-select">
            <option selected>Tamanho</option>
            <option>...</option>
          </select>
        </div>

        <div class="col">
          <label for="inputState" class="form-label">Cor</label>
          <select id="inputState" class="form-select">
            <option selected>Cores</option>
            <option>...</option>
          </select>
        </div>

        <div class="col">
          <label for="Estoque" class="form-label">Quantidade em Estoque:</label>
          <input type="number" class="form-control" id="Estoque">
        </div>


      </div>
      <div class=" d-flex justify-content-end mt-3">
        <button type="submit" class="btn btn-primary me-5 ">Criar</button>
      </div>

    </div>



  </div>
</template>

<style scoped>


</style>