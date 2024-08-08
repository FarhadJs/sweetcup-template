<script setup>
  import { ref } from "vue";
  import HightLightPink from "./assets/svg/bg-highlight.svg";
  import ShopIcon from "./assets/svg/shopIcon.svg";
  import CupCakes from "./components/CupCakes.vue";
  import TextBackground from "./components/TextBackground.vue";
  import VideoTrailer from "./components/VideoTrailer.vue";
  import WhyIsItDeliciousHere from "./components/WhyIsItDeliciousHere.vue";

  const theme = ref("dark");
</script>

<template>
  <div class="overflow-hidden w-full">
    <nav class="flex gap-5 p-5 px-44 pr-64 relative z-50">
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
      </div>
      <img
        :src="HightLightPink"
        class="pink-highlight"
        alt=""
        draggable="false" />

      <CupCakes />

      <VideoTrailer />
      <WhyIsItDeliciousHere />

      <br /><br /><br />
    </main>
  </div>
</template>
