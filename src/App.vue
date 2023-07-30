<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header/>
  <RouterView />
  <Footer/>
 <!-- <div id="preloader"></div> -->
  <!-- <RouterLink to="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i>d</RouterLink> -->

</template>

<style scoped>

</style>
