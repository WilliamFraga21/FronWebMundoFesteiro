<script >
export default {

};
</script>

<template>
  <div class="container-fluid">
    <div class="mt-2 mb-3">
      <p class="m-0  text-danger fw-bold">
        Categoria:
      </p>
    </div>

    <div class="mb-3 ms-3 w-50">
      <label for="formGroupExampleInput" class="form-label">Categoria</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Categoria">
    </div>

      <div class="  d-flex justify-content-start">
        <button class="btn btn-primary ps-4 pe-4" type="button">Criar</button>
      </div>


    <div class="mt-2 mb-3">
      <p class="m-0  text-danger fw-bold">
        SubCategoria:
      </p>
    </div>

    <div class="mb-4 ms-3">
      <label for="inputState" class="form-label ">Selecione a Categoria</label>
      <select id="inputState" class="form-select w-50">
        <option selected>Categorias</option>
        <option>Brigadeiro</option>
        <option>Brigadeiro2</option>
      </select>
      <div class="mb-3 mt-2">
        <label for="formGroupExampleInput" class="form-label">SubCategoria</label>
        <input type="text" class="form-control w-50" id="formGroupExampleInput" placeholder="SubCategoria">
      </div>


    </div>
    <div class="  d-flex justify-content-start">
      <button class="btn btn-primary ps-4 pe-4" type="button">Criar</button>
    </div>


    <div class="mt-2 mb-3">
      <p class="m-0  text-danger fw-bold">
        Tamanho:
      </p>
    </div>
    <div class="mb-3 ms-3">
      <label for="formGroupExampleInput" class="form-label">Tamanho</label>
      <input type="text" class="form-control w-50" id="formGroupExampleInput" placeholder="Tamanho">
    </div>

    <div class="  d-flex justify-content-start">
      <button class="btn btn-primary ps-4 pe-4" type="button">Criar</button>
    </div>
  </div>
</template>

<style scoped>

</style>