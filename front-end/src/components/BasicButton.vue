<script lang="ts">
export default {
  props: {
    buttonText: String,
    buttonColor: String,
    textButtonColor: String
  }
}
</script>

<template>
  <button
    v-bind:style="{
      backgroundColor: buttonColor,
      color: textButtonColor
    }"
  >
    {{ buttonText }}
  </button>
</template>

<style scoped>
button {
  margin-top: 2rem;
  border-radius: 2rem;
  font-size: 2rem;
  width: 100%;
  padding: 1rem 3rem;
  border: solid 1px var(--black-color);
}

.blue {
}
</style>
