<template>
  <div dir="rtl">
    <p
      v-for="(cup, i) in JsonCupCakes"
      :key="i"
      v-show="CupCakeSlide == cup.id"
      class="absolute top-52 right-72 bg-[#444251] rounded-full w-28 h-28 text-4xl flex justify-center items-center text-white p-4">
      {{ cup.price }}$
    </p>

    <img
      class="cupcake w-[400px] scale-150 -translate-x-96 translate-y-52"
      src="../assets//img/pink-cupcake.png"
      alt="PinkCupCake" />
    <img
      class="cupcake w-[300px] translate-x-32 translate-y-32"
      src="../assets//img/chocolate-cupcake.png"
      alt="ChocolateCupCake" />
    <img
      class="cupcake w-[300px] translate-x-32 -translate-y-[780px]"
      src="../assets//img/caramel-cupcake.png"
      alt="CaramelCupcake" />
  </div>
  <div class="absolute z-20 top-[53em] right-[480px] flex gap-7">
    <button
      @click="
        leftButtonSlideAction();
        getLeftAction();
      "
      class="bg-white p-4 rounded-lg active:scale-95 transition-all duration-300">
      <img :src="ArrowLeft" alt="" />
    </button>
    <button
      @click="
        rightButtonSlideAction();
        getRightAction();
      "
      class="bg-white p-4 rounded-lg active:scale-95 transition-all duration-300">
      <img :src="ArrowRight" alt="" />
    </button>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import ArrowLeft from "../assets/svg/arrow-left.svg";
  import ArrowRight from "../assets/svg/arrow-right.svg";

  const CupCakeSlide = ref(0);
  const CupCakes = document.getElementsByClassName("cupcake");

  const JsonCupCakes = ref([
    {
      id: 0,
      name: "PinkCupCake",
      url: "../assets//img/pink-cupcake.png",
      price: 30,
    },
    {
      id: 1,
      name: "ChocolateCupCake",
      url: "../assets//img/chocolate-cupcake.png",
      price: 40,
    },
    {
      id: 2,
      name: "CaramelCupcake",
      url: "../assets//img/caramel-cupcake.png",
      price: 35,
    },
  ]);

  const leftButtonSlideAction = () => {
    if (
      CupCakeSlide.value <= JsonCupCakes.value.length - 1 &&
      CupCakeSlide.value > 0
    )
      CupCakeSlide.value -= 1;
  };
  const rightButtonSlideAction = () => {
    if (CupCakeSlide.value < JsonCupCakes.value.length - 1)
      CupCakeSlide.value += 1;
  };

  const getLeftAction = () => {
    console.log(CupCakeSlide.value);

    switch (CupCakeSlide.value) {
      case 1:
        CupCakes[0].classList.remove("translate-x-52");
        CupCakes[0].classList.remove("translate-y-[32em]");
        CupCakes[0].classList.add("translate-x-52");
        CupCakes[0].classList.add("-translate-y-[5em]");

        CupCakes[2].classList.remove("-translate-x-[25.8em]");
        CupCakes[2].classList.remove("-translate-y-[34em]");
        CupCakes[2].classList.remove("scale-150");
        CupCakes[2].classList.add("-translate-y-[15em]");
        CupCakes[2].classList.add("translate-x-[10em]");

        CupCakes[1].classList.remove("translate-x-[8em]");
        CupCakes[1].classList.remove("-translate-y-[27em]");
        CupCakes[1].classList.add("-translate-x-[27em]");
        CupCakes[1].classList.add("-translate-y-[11em]");
        CupCakes[1].classList.add("scale-150");
        console.log(CupCakeSlide.value);

        break;
      case 0:
        CupCakes[0].classList.remove("translate-x-[11em]");
        CupCakes[0].classList.remove("-translate-y-8");
        CupCakes[0].classList.remove("translate-x-52");
        CupCakes[0].classList.remove("-translate-y-[5em]");
        CupCakes[0].classList.add("scale-150");
        CupCakes[0].classList.add("-translate-x-96");
        CupCakes[0].classList.add("translate-y-52");

        CupCakes[2].classList.remove("-translate-y-[15em]");
        CupCakes[2].classList.remove("translate-x-[10em]");
        CupCakes[2].classList.add("translate-x-32");
        CupCakes[2].classList.add("-translate-y-[780px]");

        CupCakes[1].classList.remove("-translate-x-[27em]");
        CupCakes[1].classList.remove("-translate-y-[10em]");
        CupCakes[1].classList.remove("scale-150");
        CupCakes[1].classList.add("translate-x-32");
        CupCakes[1].classList.add("translate-y-32");
        console.log(CupCakeSlide.value);
        break;
      default:
        break;
    }
  };
  const getRightAction = () => {
    console.log(CupCakeSlide.value);
    switch (CupCakeSlide.value) {
      case 1:
        CupCakes[2].classList.remove("translate-x-32");
        CupCakes[2].classList.remove("-translate-y-[780px]");
        CupCakes[2].classList.add("translate-x-40");
        CupCakes[2].classList.add("-translate-y-[15em]");

        CupCakes[1].classList.remove("translate-x-32");
        CupCakes[1].classList.remove("translate-y-32");
        CupCakes[1].classList.add("-translate-x-[26.5em]");
        CupCakes[1].classList.add("-translate-y-[11em]");
        CupCakes[1].classList.add("scale-150");

        CupCakes[0].classList.remove("-translate-x-96");
        CupCakes[0].classList.remove("translate-x-52");
        CupCakes[0].classList.remove("translate-y-52");
        CupCakes[0].classList.remove("translate-y-[32em]");
        CupCakes[0].classList.remove("scale-150");
        CupCakes[0].classList.add("translate-x-[11em]");
        CupCakes[0].classList.add("-translate-y-8");
        console.log(CupCakeSlide.value);

        break;
      case 2:
        CupCakes[2].classList.remove("translate-x-40");
        CupCakes[2].classList.remove("-translate-y-[15em]");
        CupCakes[2].classList.add("-translate-x-[25.8em]");
        CupCakes[2].classList.add("-translate-y-[34em]");
        CupCakes[2].classList.add("scale-150");

        CupCakes[1].classList.remove("-translate-x-[26.5em]");
        CupCakes[1].classList.remove("-translate-y-[11em]");
        CupCakes[1].classList.remove("scale-150");
        CupCakes[1].classList.add("translate-x-[8em]");
        CupCakes[1].classList.add("-translate-y-[27em]");

        CupCakes[0].classList.remove("translate-x-[11em]");
        CupCakes[0].classList.remove("-translate-y-8");
        CupCakes[0].classList.add("translate-x-52");
        CupCakes[0].classList.add("translate-y-[32em]");
        console.log(CupCakeSlide.value);

        break;
      default:
        break;
    }
  };
</script>
<style scoped>
  img {
    @apply transition-all duration-700 ease-in-out;
  }
</style>
