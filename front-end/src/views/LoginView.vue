<script setup lang="ts">
import LoginBox from '../components/LoginBox.vue'
</script>

<template>
  <div class="container">
    <LoginBox />
    <router-view />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--dark-gray-color);
}
</style>
