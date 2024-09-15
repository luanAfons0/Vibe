<template>
  <div class="notFound">
    404 | Page not found
    <router-link to="/">
      <img src="/images/vibe-logo.png" alt="Application logo" />
    </router-link>
  </div>
</template>

<style scoped>
.notFound {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black-color);
  color: var(--white-color);
  font-size: 3rem;
}

img {
  width: 100px;
  height: 100px;
}
</style>
