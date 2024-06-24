<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="container">
    <HeaderComponent />
      <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
