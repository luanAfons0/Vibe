<script  setup lang="ts">
    defineProps<{
        msg: string
    }>()
</script>

<template>
    <div class="left-side">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped>
    .left-side {
        width: 30vw;
        height: 100vh;
        background-color: blue;
    }
</style>