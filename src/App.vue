<script setup>
  import { ref } from "vue";
  import HightLightPink from "./assets/svg/bg-highlight.svg";
  import ShopIcon from "./assets/svg/shopIcon.svg";
  import CupCakes from "./components/CupCakes.vue";
  import TextBackground from "./components/TextBackground.vue";
  import VideoTrailer from "./components/VideoTrailer.vue";
  import WhyIsItDeliciousHere from "./components/WhyIsItDeliciousHere.vue";
  import NewProducts from "./components/NewProducts.vue";
  import HowDoWeWork from "./components/HowDoWeWork.vue";
  import CatalogOfTastyTreats from "./components/CatalogOfTastyTreats.vue";
  import CollectionsOfCupcakes from "./components/CollectionsOfCupcakes.vue";

  const theme = ref("dark");
</script>

<template>

  <div class="flex flex-col justify-center items-center text-xl fixed top-0 left-0 right-0 bottom-0 z-[999999999] bg-gray-500 text-white text-center lg:hidden">
    The Resolution for Mobile is not available yet.
  </div>
  <div class="overflow-hidden w-full hidden lg:block">
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
        <p class="font-[Montserrat-Bold] text-7xl w-2/3">
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
      <NewProducts />
      <HowDoWeWork />
      <CatalogOfTastyTreats />
      <CollectionsOfCupcakes />

      <br /><br /><br />
    </main>
  </div>
</template>
