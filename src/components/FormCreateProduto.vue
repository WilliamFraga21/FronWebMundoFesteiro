<script >

export default {

}


</script>

<template>

  <div>
    <div>
      <p class="m-0">
        Cria Produto
      </p>
    </div>

    <div>
      <div class="row g-3">
        <div class="col">
          <input type="text" class="form-control" placeholder="Primeiro Nome" aria-label="First name">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Último Nome" aria-label="Last name">
        </div>
      </div>

    </div>



    <div>
      <form class="row g-3 mt-1">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4">
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4">
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">CEP</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Rua</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Cidade</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">Estado</label>
          <input type="text" class="form-control" id="inputCity">
        </div>

        <div class="col-md-2">
          <label for="inputZip" class="form-label">Bairro</label>
          <input type="text" class="form-control" id="inputZip">
        </div>

        <div class="col-12 d-flex justify-content-end ">
          <button type="submit" class="btn btn-danger me-5 ">Salvar Alterações</button>
        </div>
      </form>
    </div>



  </div>
</template>

<style scoped>

</style>