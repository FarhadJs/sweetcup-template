<template>
  <div class="flex flex-col gap-40 items-center justify-center w-full text-center mt-44">
    <h1 class="text-5xl font-bold">Try our new products</h1>

    <div class="flex gap-20">
      <img :src="PannaCotta" class="" />
      <img :src="Tiramisu" class="" />
      <img :src="AppleTart" class="" />
    </div>
  </div>
</template>
<script setup>
  import AppleTart from "../assets/img/Apple_tart.png";
  import Tiramisu from "../assets/img/Tiramisu.png";
  import PannaCotta from "../assets/img/Panna_Cotta.png";
</script>
<style></style>
