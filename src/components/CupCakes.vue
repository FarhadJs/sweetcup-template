<template>
  <div dir="rtl">
    <p
      class="absolute top-52 right-72 bg-[#444251] rounded-full w-28 h-28 text-4xl flex justify-center items-center text-white p-4">
      30$
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
  // const CUpCakes = ref([
  //   {
  //     name: "PinkCupCake",
  //     price: 30,
  //     url: "",
  //   },
  //   {
  //     name: "CaramelCupCake",
  //     price: 35,
  //     url: "",
  //   },
  //   {
  //     name: "ChocolateCupCake",
  //     price: 40,
  //     url: "",
  //   },
  // ]);

  const firstElement = ref();
  const getLeftAction = () => {
    switch (CupCakeSlide.value) {
      case 1:
        CupCakes[1].classList.add("-translate-x-[430px]");
        CupCakes[1].classList.add("-translate-y-40");
        CupCakes[1].classList.remove("translate-x-32");
        CupCakes[1].classList.remove("translate-y-[130px]");
        CupCakes[1].classList.add("scale-150");

        CupCakes[2].classList.remove("translate-x-32");
        CupCakes[2].classList.remove("-translate-y-56");
        CupCakes[2].classList.add("-translate-x-[430px]");
        CupCakes[2].classList.add("-translate-y-[560px]");
        CupCakes[2].classList.add("scale-150");

        CupCakes[0].classList.remove("translate-x-48");
        CupCakes[0].classList.remove("-translate-y-10");
        CupCakes[0].classList.add("translate-x-32");
        CupCakes[0].classList.add("-translate-y-56");
        CupCakeSlide.value += 1;

        break;
      case 0:
        CupCakes[0].classList.add("translate-x-48");
        CupCakes[0].classList.add("-translate-y-10");
        CupCakes[0].classList.remove("scale-150");

        CupCakes[1].classList.add("-translate-x-[430px]");
        CupCakes[1].classList.add("-translate-y-48");
        CupCakes[1].classList.add("scale-150");

        CupCakes[2].classList.add("translate-x-32");
        CupCakes[2].classList.add("-translate-y-[230px]");
        CupCakeSlide.value -= 1;

      default:
        break;
    }
  };
  const getRightAction = () => {
    switch (CupCakeSlide.value) {
      case 0:
        CupCakes[0].classList.add("translate-x-48");
        CupCakes[0].classList.add("-translate-y-10");
        CupCakes[0].classList.remove("scale-150");

        CupCakes[1].classList.add("-translate-x-[430px]");
        CupCakes[1].classList.add("-translate-y-48");
        CupCakes[1].classList.add("scale-150");

        CupCakes[2].classList.add("translate-x-32");
        CupCakes[2].classList.add("-translate-y-[230px]");
        CupCakeSlide.value += 1;
        console.log(CupCakeSlide.value);
        break;
      case 1:
        CupCakes[0].classList.remove("-translate-x-[430px]");
        CupCakes[0].classList.add("translate-y-[520px]");
        CupCakes[0].classList.remove("-translate-y-40");
        CupCakes[0].classList.add("translate-x-48");
        CupCakes[0].classList.remove("scale-150");

        CupCakes[2].classList.remove("translate-x-32");
        CupCakes[2].classList.add("-translate-x-[430px]");
        CupCakes[2].classList.add("-translate-y-[560px]");
        CupCakes[2].classList.remove("-translate-y-56");
        CupCakes[2].classList.add("scale-150");

        CupCakes[1].classList.add("-translate-y-[500px]");
        CupCakes[1].classList.add("translate-x-[150px]");
        CupCakes[1].classList.remove("-translate-y-10");
        CupCakes[1].classList.remove("translate-x-48");
        CupCakes[1].classList.remove("scale-150");
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
