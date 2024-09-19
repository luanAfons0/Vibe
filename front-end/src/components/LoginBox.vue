<script>
import closeIcon from './icons/closeIcon.vue'
import basicButton from './BasicButton.vue';

export default {
  components: {
    closeIcon,
    basicButton,
  }
}
</script>

<template>
  <div class="login">
    <div class="top">
      <closeIcon id="closeIcon" />
      <div class="logo">
        <img src="/images/vibe-logo.png" alt="Application logo" />
      </div>
    </div>
    <div class="main">
      <h1>Sign up today!</h1>
      <input type="text" placeholder="Your name here" />
      <input type="text" placeholder="Your email here" />
      <input type="password" placeholder="Your password here" />
      <input type="password" placeholder="Confirm your password" />
      <div class="buttonRow">
        <basicButton :textButtonColor="'#000000'" :buttonText="'Tweet'" :buttonColor="'#ffffff'" />
        <basicButton :textButtonColor="'#ffffff'" :buttonText="'Forgot your password?'" :buttonColor="'#000000'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 50rem;
  height: 50rem;
  background-color: var(--black-color);
  border-radius: 2rem;
}

.top {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  padding: 1rem;
}

img {
  width: 60px;
  height: 60px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

#closeIcon {
  width: 40px;
  height: 40px;
  margin: auto;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--white-color);
}

input {
  background-color: var(--black-color);
  border: solid 1px var(--white-color);
  height: 4rem;
  border-radius: 0.4rem;
  color: var(--white-color);
  padding: 1rem;
  font-size: 1.5rem;
  width: 50%;
}

.buttonRow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.buttonRow :nth-child(2){
  border-color: var(--white-color);
}
</style>
