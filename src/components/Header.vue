<script setup>

</script>

<template>
  <header class="d-flex justify-content-center border-bottom border-2" style="height: auto;">
    <div class="container-fluid" style="width: 90%;">
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <!-- Logo Section -->
        <div class="d-flex justify-content-center align-items-center" style="height: 100px;">
          <img src="../assets/imagens/MUNDO.png" alt="Logo" class="img-fluid" style="height: 80px;">
        </div>

        <!-- Navigation Links -->
        <div class="d-flex justify-content-center align-items-center flex-grow-1 flex-wrap">
          <nav class="d-flex flex-wrap justify-content-center align-items-center" style="height: 40px;">
            <a class="nav-link ms-2 me-2" href="#">Home</a>
            <a class="nav-link ms-2 me-2" href="#">Contato</a>
            <a class="nav-link ms-2 me-2" href="#">Sobre</a>
            <a class="nav-link ms-2 me-2" href="#">Cadastrar</a>
            <a class="nav-link ms-2 me-2" href="#">Blog</a>
          </nav>
        </div>

        <!-- Search and Icons Section -->
        <div class="d-flex justify-content-end align-items-center flex-wrap" style="gap: 10px;">
          <div class="input-group" style="max-width: 250px;">
            <input class="form-control" list="cities" id="exampleDataList" placeholder="Type to search...">
            <span class="input-group-text">
            <img src="../assets/imagens/big-search-len.png" alt="Search Icon" class="img-fluid" style="height: 24px;">
          </span>
            <datalist id="cities">
              <option value="Seattle">Seattle</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </datalist>
          </div>

          <span class="d-flex justify-content-center align-items-center">
          <img src="../assets/imagens/Wishlist.svg" alt="Wishlist Icon" class="img-fluid" style="height: 24px;">
        </span>
          <span class="d-flex justify-content-center align-items-center ms-3">
          <img src="../assets/imagens/Cart1.svg" alt="Cart Icon" class="img-fluid" style="height: 24px;">
        </span>
          <span class="d-flex justify-content-center align-items-center ms-3 me-3">
          <img src="../assets/imagens/user.svg" alt="User Icon" class="img-fluid" style="height: 24px;">
        </span>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>

</style>