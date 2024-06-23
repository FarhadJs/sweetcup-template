<script setup>
  import { ref } from "vue";
  import HightLightPink from "./assets/svg/bg-highlight.svg";
  import CupCakes from "./components/CupCakes.vue";

  const theme = ref("dark");

  const ChangeTheme = (e) => {
    console.log(theme);
    if (!e.target.checked) theme.value = "light";
    else theme.value = "dark";
    document.documentElement.className = theme.value;
  };
</script>

<template>
  <div class="overflow-hidden w-full">
    <h1 class="text-4xl font-bold dark:text-white">Hello World!</h1>
    <input type="checkbox" :onclick="ChangeTheme" />
    <img :src="HightLightPink" class="pink-highlight w-[100vh] " alt="" />

    <CupCakes />
  </div>
</template>

<style scoped></style>
