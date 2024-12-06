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
  import OrderSweet from "./components/OrderSweet.vue";
  import CupCakesMobileView from "./components/CupCakes-MobileView.vue";

  const theme = ref("dark");
</script>

<template>
  <!-- <div
    class="flex flex-col justify-center items-center text-xl fixed top-0 left-0 right-0 bottom-0 z-[999999999] bg-gray-500 text-white text-center lg:hidden">
    The Resolution for Mobile is not available yet.
  </div> -->
  <div class="overflow-hidden w-full lg:block">
    <nav
      class="flex gap-5 p-5 pl-7 lg:px-64 justify-between lg:justify-around relative z-50">
      <img
        src="./assets/svg/menu-burger.svg"
        class="scale-150 -mt-2 lg:hidden" />
      <h1 class="text-xl font-[Sail] text-[#9C0746]">Sweet Cup Cake</h1>
      <ul class="list-none lg:flex gap-10 mx-auto hidden">
        <li>About us</li>
        <li>Catalog</li>
        <li>Reviews</li>
        <li>Contacts</li>
      </ul>
      <img :src="ShopIcon" alt="ShopIcon" class="scale-75" />
    </nav>
    <main>
      <TextBackground />
      <div
        class="absolute lg:top-72 top-32 left-0 right-0 lg:right-auto lg:left-auto flex flex-col justify-center text-center lg:text-left items-center lg:items-left lg:gap-16 gap-5">
        <h1
          class="lg:text-8xl scale-[0.70] font-[Sail] lg:pl-8 text-[#9C0746] w-full">
          Sweet Cup Cake
        </h1>
        <p class="font-[Montserrat-Bold] lg:text-7xl text-2xl w-2/3">
          We will make yours life is sweeter!
        </p>
      </div>
      <img
        :src="HightLightPink"
        class="pink-highlight hidden lg:block"
        alt=""
        draggable="false" />

      <CupCakes />
      <CupCakesMobileView />

      <VideoTrailer />
      <!-- <WhyIsItDeliciousHere />
      <NewProducts />
      <HowDoWeWork />
      <CatalogOfTastyTreats />
      <CollectionsOfCupcakes />
      <OrderSweet /> -->

      <br /><br /><br />
    </main>
  </div>
</template>
