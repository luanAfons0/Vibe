<script  setup lang="ts">
    defineProps<{
        msg: string
    }>()
</script>

<template>
    <div class="middle-scroll">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped>
    .middle-scroll {
        width: 100%;
        min-height: 100vh;
        background-color: green;
    }
</style>