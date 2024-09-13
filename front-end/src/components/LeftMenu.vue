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
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 30vw;
        height: 100vh;
        background-color: var(--black-color);
        color: var(--white-color);
    }
</style>