<script  setup lang="ts">
    defineProps<{
        msg: string
    }>()
</script>

<template>
    <div class="right-side">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped>
    .right-side {
        width: 40vw;
        height: 100vh;
        background-color: red;
    }
</style>