<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationComponent from './components/shared/Navigation.vue'
import FooterComponent from './components/shared/Footer.vue'
</script>

<template>
  <div class="container">
    <NavigationComponent />
    <div class="container min-vh-100">
        <router-view></router-view>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
