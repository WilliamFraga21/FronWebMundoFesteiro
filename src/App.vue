<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from "@/components/TopBar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <TopBar/>
  <Header/>
  <RouterView />
  <Footer/>
</template>

<style >

</style>
