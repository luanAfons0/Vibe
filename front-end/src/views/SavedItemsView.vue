<script setup lang="ts">
import LeftMenu from '../components/LeftMenu.vue'
import RightMenu from '../components/RightMenu.vue'
import MiddleScroll from '../components/MiddleScroll.vue'
</script>

<template>
  <div class="wrapper">
    <LeftMenu />
    <MiddleScroll />
    <RightMenu />
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
