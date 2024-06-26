<template>
  <div dir="rtl">
    <p
      v-for="(cup, i) in JsonCupCakes"
      :key="i"
      class="absolute top-52 right-72 bg-[#444251] rounded-full w-28 h-28 text-4xl flex justify-center items-center text-white p-4">
      {{ cup.price }}$
    </p>

    <img
      class="cupcake w-[400px] scale-150 -translate-x-96 translate-y-52"
      src="../assets//img/pink-cupcake.png"
      alt="PinkCupCake"
      ref="firstElement" />
    <img
      class="cupcake w-[300px] translate-x-32 translate-y-32"
      src="../assets//img/chocolate-cupcake.png"
      alt="ChocolateCupCake" />
    <img
      class="cupcake w-[300px] translate-x-32 -translate-y-[780px]"
      src="../assets//img/caramel-cupcake.png"
      alt="CaramelCupcake" />
  </div>
  <button
    @click="getLeftAction"
    class="absolute right-[600px] top-[800px] z-20 bg-white p-4 rounded-lg active:scale-95 transition-all duration-300">
    left
  </button>
  <button
    @click="getRightAction"
    class="absolute right-[500px] top-[800px] z-20 bg-white p-4 rounded-lg active:scale-95 transition-all duration-300">
    Right
  </button>
</template>
<script setup>
  import { ref } from "vue";

  const CupCakeSlide = ref(0);
  const CupCakes = document.getElementsByClassName("cupcake");

  const JsonCupCakes = ref([
    {
      name: "PinkCupCake",
      url: "../assets//img/pink-cupcake.png",
      price: 30,
    },
    {
      name: "ChocolateCupCake",
      url: "../assets//img/chocolate-cupcake.png",
      price: 40,
    },
    {
      name: "CaramelCupcake",
      url: "../assets//img/caramel-cupcake.png",
      price: 35,
    },
  ]);

  const firstElement = ref();
  const getLeftAction = () => {
    switch (CupCakeSlide.value) {
      case 1:
        CupCakes[0].classList.add("translate-x-44");
        CupCakes[0].classList.add("-translate-y-[3em]");
        CupCakes[0].classList.remove("translate-x-36");
        CupCakes[0].classList.remove("translate-y-[32em]");

        CupCakes[2].classList.add("-translate-y-[15em]");
        CupCakes[2].classList.remove("-translate-x-[27em]");
        CupCakes[2].classList.remove("-translate-y-[33em]");
        CupCakes[2].classList.remove("scale-150");

        CupCakes[1].classList.add("-translate-x-[26.5em]");
        CupCakes[1].classList.add("-translate-y-[11em]");
        CupCakes[1].classList.add("scale-150");
        CupCakes[1].classList.remove("translate-x-[7em]");
        CupCakes[1].classList.remove("-translate-y-[28em]");
        CupCakeSlide.value -= 1;
        console.log(CupCakeSlide.value);

        break;
      case 0:
        CupCakes[0].classList.remove("translate-x-44");
        CupCakes[0].classList.remove("-translate-y-[3em]");
        CupCakes[0].classList.add("scale-150");

        CupCakes[1].classList.remove("-translate-x-[26.5em]");
        CupCakes[1].classList.remove("-translate-y-[11em]");
        CupCakes[1].classList.remove("scale-150");
        CupCakes[1].classList.add("translate-x-[7em]");
        CupCakes[1].classList.add("translate-y-[8em]");

        CupCakes[2].classList.remove("translate-x-32");
        CupCakes[2].classList.remove("-translate-y-[230px]");
        CupCakes[2].classList.add("translate-x-[8em]");
        CupCakes[2].classList.add("-translate-y-[48em]");
        console.log(CupCakeSlide.value);

      default:
        break;
    }
  };
  const getRightAction = () => {
    switch (CupCakeSlide.value) {
      case 0:
        CupCakes[2].classList.add("translate-x-32");
        CupCakes[2].classList.add("-translate-y-[230px]");
        CupCakes[2].classList.remove("translate-x-[8em]");
        CupCakes[2].classList.remove("-translate-y-[48em]");
        CupCakes[2].classList.add("-translate-y-[15em]");

        CupCakes[1].classList.remove("translate-x-[7em]");
        CupCakes[1].classList.remove("translate-y-[8em]");
        CupCakes[1].classList.add("-translate-y-[11em]");
        CupCakes[1].classList.add("-translate-x-[26.5em]");
        CupCakes[1].classList.add("-translate-y-[11em]");
        CupCakes[1].classList.add("scale-150");

        CupCakes[0].classList.remove("scale-150");
        CupCakes[0].classList.add("translate-x-36");
        CupCakes[0].classList.add("-translate-y-[3em]");
        CupCakeSlide.value += 1;
        console.log(CupCakeSlide.value);

        break;
      case 1:
        CupCakes[0].classList.remove("translate-x-36");
        CupCakes[0].classList.remove("-translate-y-[3em]");
        CupCakes[0].classList.add("translate-x-36");
        CupCakes[0].classList.add("translate-y-[32em]");

        CupCakes[2].classList.remove("-translate-y-[15em]");
        CupCakes[2].classList.add("-translate-x-[27em]");
        CupCakes[2].classList.add("-translate-y-[33em]");
        CupCakes[2].classList.add("scale-150");

        CupCakes[1].classList.remove("-translate-x-[26.5em]");
        CupCakes[1].classList.remove("-translate-y-[11em]");
        CupCakes[1].classList.remove("scale-150");
        CupCakes[1].classList.add("translate-x-[7em]");
        CupCakes[1].classList.add("-translate-y-[28em]");
        console.log(CupCakeSlide.value);

      default:
        break;
    }
  };
</script>
<style scoped>
  img {
    @apply transition-all duration-500;
  }
</style>
