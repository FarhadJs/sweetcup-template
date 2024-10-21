<template>
  <div
    class="flex flex-col gap-20 items-center justify-center w-full text-center mt-44 relative">
    <h1 class="text-5xl font-bold">Try our new products</h1>
    <img src="../assets/img/raspberry.png" class="absolute -top-28v -left-32 scale-[0.3]">
    <div class="flex gap-20 justify-center items-center">
      <div class="flex flex-col w-96 justify-between items-center">
        <img :src="PannaCotta" />
        <div class="flex flex-col justify-center items-center gap-3">
          <h3 class="text-red-500 text-4xl">Panna Cotta</h3>
          <p>
            Fresh eggs, yolk, sugar, mascarpone, ready-made "Savoyardi" cookies,
            espresso, cognac, cocoa, salt
          </p>
          <h5>UAH 70 / 200 g</h5>
          <button class="rounded-full px-5 py-3 mt-5">Add to cart</button>
        </div>
      </div>
      <div class="w-96 flex flex-col justify-center items-center">
        <img :src="Tiramisu" />
        <div class="flex flex-col justify-between items-center gap-3">
          <h3 class="text-red-500 text-4xl">Tiramisu</h3>
          <p>
            Fresh eggs, yolk, sugar, mascarpone, ready-made "Savoyardi" cookies,
            espresso, cognac, cocoa, salt
          </p>
          <h5>UAH 70 / 200 g</h5>
          <button class="rounded-full px-5 py-3 mt-5">Add to cart</button>
        </div>
      </div>
      <div class="w-96 flex flex-col justify-center items-center">
        <img :src="AppleTart" />
        <h3 class="text-red-500 text-4xl">Tiramisu</h3>
        yolk,
        <p>
          Fresh eggs, sugar, mascarpone, ready-made "Savoyardi" cookies,
          espresso, cognac, cocoa, salt
        </p>
        <h5>UAH 70 / 200 g</h5>
        <button class="rounded-full px-5 py-3 mt-5">Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script setup>
  import AppleTart from "../assets/img/Apple_tart.png";
  import Tiramisu from "../assets/img/Tiramisu.png";
  import PannaCotta from "../assets/img/Panna_Cotta.png";
</script>
<style scoped>
  button {
    background: linear-gradient(85.61deg, #9c0746 -15.57%, #b44e79 128.11%);
    @apply w-56 text-white;
  }

  img {
    @apply h-80 w-72;
  }
</style>
