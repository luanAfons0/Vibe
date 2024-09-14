<script lang="ts">
    import homeIcon from './icons/homeIcon.vue';
    import hashTagIcon from './icons/hashTagIcon.vue';
    import bellIcon from './icons/bellIcon.vue';
    import mailIcon from './icons/mailIcon.vue';
    import flagIcon from './icons/flagIcon.vue';
    import journalIcon from './icons/journalIcon.vue';
    import etceteraIcon from './icons/etceteraIcon.vue';
    import profileIcon from './icons/profileIcon.vue';

    export default {
        data(){
            return { leftMenuButtons: [ 
                { label: "Página Inicial", link:"/", icon: "homeIcon"},
                { label: "Explorar", link:"/explore", icon: "hashTagIcon"},
                { label: "Notificações", link:"/notifications", icon: "bellIcon"},
                { label: "Mensagens", link:"/messages", icon: "mailIcon"},
                { label: "Itens salvos", link:"/saved-items", icon: "flagIcon"},
                { label: "Listas", link:"/lists", icon: "journalIcon"},
                { label: "Perfil", link:"/profile", icon: "profileIcon"},
                { label: "Mais", link:"/more", icon: "etceteraIcon"},
            ] };
        },
        components: {
            homeIcon, hashTagIcon, bellIcon, mailIcon, flagIcon, journalIcon, etceteraIcon, profileIcon
        },
    }
</script>

<template>
    <div class="left-side">
        <img src="/images/vibe-logo.png" alt="">
        <div class="left-button" v-for="(button, index) in leftMenuButtons" v-bind:key="index">
            <component v-bind:is="button.icon"></component>
            <a :href="button.link"> {{ button.label }}</a>
        </div>
    </div>
</template>

<style scoped>
    .left-side {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.5rem;
        width: 25vw;
        height: 100vh;
        padding: 1rem 5rem;
        background-color: var(--black-color);
        color: var(--white-color);
    }

    img {
        width: 50px;
        height: 50px;
    }

    .left-button {
        display: flex;
        align-items: center;
        height: 80px;
        width: 300px;
    }

    .left-button a {
        font-size: 2rem;
        color: var(--white-color);
        text-decoration: none;
    }

    .left-button svg {
        width: 50px;
        height: 50px;
        margin-right: 1rem;
        stroke-width: 1px !important;
    }
</style>