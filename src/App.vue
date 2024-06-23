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
    <nav class="flex gap-5 p-4 px-44">
      <input type="checkbox" :onclick="ChangeTheme" />
      <h1 class="text-xl font-[Sail] text-[#9C0746]">Sweet Cup Cake</h1>
    </nav>
    <div class="mt-80 ml-52 absolute">
      <h1 class="text-8xl font-[Sail] text-[#9C0746]">Sweet Cup Cake</h1>
    </div>
    <img
      :src="HightLightPink"
      class="pink-highlight w-[100vh]"
      alt=""
      draggable="false" />

    <CupCakes />
  </div>
</template>

<style scoped></style>
