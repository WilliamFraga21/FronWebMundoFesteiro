<script >
export default {

}
</script>

<template>
  <div class="container-fluid px-3">
    <ul class="list-group list-group-flush">
      <li class="list-group-item fw-bold text-center text-md-start">Gerenciar Pedidos</li>
      <ul class="list-group list-group-flush ps-0">
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Pedidos de Hoje</a></li>
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Pedidos Pendentes</a></li>
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Pedidos em Entrega</a></li>
      </ul>

      <li class="list-group-item fw-bold text-center text-md-start">Gerenciar Usuários</li>
      <ul class="list-group list-group-flush ps-0">
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Clientes</a></li>
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Administradores</a></li>
      </ul>

      <li class="list-group-item fw-bold text-center text-md-start">Cadastros</li>
      <ul class="list-group list-group-flush ps-0">
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Criar Sub/Categoria</a></li>
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Editar Produtos</a></li>
        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Inserir Produto</a></li>
      </ul>

<!--      <li class="list-group-item fw-bold text-center text-md-start">Gerenciar Site</li>-->
<!--      <ul class="list-group list-group-flush ps-0">-->
<!--        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Produtos</a></li>-->
<!--        <li class="list-group-item ms-3 text-body-tertiary"><a class="nav-link p-0" href="#">Usuários Logados</a></li>-->
<!--      </ul>-->
    </ul>
  </div>

</template>

<style scoped>

li{
  border: none;
}

</style>