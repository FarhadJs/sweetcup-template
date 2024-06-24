<script setup>
  import { ref } from "vue";
  import HightLightPink from "./assets/svg/bg-highlight.svg";
  import ShopIcon from "./assets/svg/shopIcon.svg";
  import CupCakes from "./components/CupCakes.vue";
  import TextBackground from "./components/TextBackground.vue";

  const theme = ref("dark");

  // const ChangeTheme = (e) => {
  //   console.log(theme);
  //   if (!e.target.checked) theme.value = "light";
  //   else theme.value = "dark";
  //   document.documentElement.className = theme.value;
  // };
</script>

<template>
  <div class="overflow-hidden w-full">
    <nav class="flex gap-5 p-5 px-44 pr-64 relative z-50">
      <!-- <input type="checkbox" :onclick="ChangeTheme" /> -->
      <h1 class="text-xl font-[Sail] text-[#9C0746]">Sweet Cup Cake</h1>
      <ul class="list-none flex gap-10 mx-auto">
        <li>About us</li>
        <li>Catalog</li>
        <li>Reviews</li>
        <li>Contacts</li>
      </ul>
      <img :src="ShopIcon" alt="ShopIcon" />
    </nav>
    <main>
      <TextBackground />
      <div
        class="mt-72 ml-52 absolute flex flex-col justify-center items-left gap-16">
        <h1 class="text-8xl font-[Sail] text-[#9C0746]">Sweet Cup Cake</h1>
        <p class="font-[Montserrat] text-7xl w-2/3">
          We will make yours life is sweeter!
        </p>
        <div class="flex gap-5">
          <button class="serve_buttons">Choose dessert</button>
          <button
            class="rounded-full border border-[#9C0746] p-4 px-8 w-72 h-20 text-2xl transition-all hover:bg-[#9C0746] hover:text-white hover:drop-shadow-2xl hover:shadow-slate-800">
            Create your own
          </button>
        </div>
      </div>
      <img
        :src="HightLightPink"
        class="pink-highlight w-[100vh]"
        alt=""
        draggable="false" />

      <CupCakes />
    </main>
  </div>
</template>

<style scoped>
  .serve_buttons {
    @apply rounded-full border border-[#9C0746] bg-[#9C0746] text-white p-4 px-8 w-72 h-20 text-2xl transition-all;
  }
  .serve_buttons:hover {
    @apply drop-shadow-2xl shadow-slate-800 bg-[#9C0746] text-white;
  }
</style>
