<script setup lang="ts">
import LeftMenu from '../components/LeftMenu.vue'
</script>

<template>
  <div class="wrapper">
    <LeftMenu />
    <router-view />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
