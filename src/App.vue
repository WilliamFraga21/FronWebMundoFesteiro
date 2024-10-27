<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from "@/components/TopBar.vue";
import Header from "@/components/HeaderComponent.vue";
import Footer from "@/components/Footer.vue";
</script>

<template class="">
  <TopBar/>
  <Header/>
  <RouterView />
  <Footer/>
</template>

<style >

</style>
