<template>
  <div dir="rtl" class="relative -z-10">
    <p
      class="absolute top-40 right-64 bg-[#444251] rounded-full w-28 h-28 text-4xl flex justify-center items-center text-white p-4 transition-all duration-500"
      :class="store.is_selecting_cupcake ? 'top-[3.3em] right-[5.7em]' : ''">
      {{ CupCakeSelected.price }}$
    </p>

    <img
      class="cupcake w-[400px] scale-150 -translate-x-96 translate-y-52 transition-all duration-500"
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

    <h3
      class="bg-white p-3 rounded-full text-center text-2xl font-bold absolute z-[500] bottom-96 right-[18.8em] w-60 transition-all duration-500"
      :class="$store.is_selecting_cupcake ? 'bottom-[13em] scale-125' : ''">
      {{ CupCakeSelected.name }}
    </h3>
  </div>

  <div class="flex gap-5 absolute top-[45em] left-52">
    <button
      @mouseenter="
        $store.toggleSelectCupCake();
        checkSelecting();
      "
      @mouseleave="
        $store.toggleSelectCupCake();
        checkSelecting();
      "
      class="serve_buttons">
      Choose dessert
    </button>
    <button
      class="rounded-full border border-[#9C0746] p-4 px-8 w-72 h-20 text-2xl transition-all hover:bg-[#9C0746] hover:text-white hover:drop-shadow-2xl hover:shadow-slate-800">
      Create your own
    </button>
  </div>

  <div class="absolute z-20 top-[53em] right-[480px] flex gap-7">
    <img
      src="../assets//img//comp-single.png"
      class="absolute right-52 -top-32 scale-125"
      :class="$store.is_selecting_cupcake ? 'mt-10' : ''"
      alt="" />
    <button
      @click="
        leftButtonSlideAction();
        getLeftAction();
      "
      :class="$store.is_selecting_cupcake ? 'mt-20' : ''"
      class="bg-white p-4 rounded-lg active:scale-95 transition-all duration-500">
      <img :src="ArrowLeft" alt="" />
    </button>
    <button
      @click="
        rightButtonSlideAction();
        getRightAction();
      "
      :class="$store.is_selecting_cupcake ? 'mt-20' : ''"
      class="bg-white p-4 rounded-lg active:scale-95 transition-all duration-500">
      <img :src="ArrowRight" alt="" />
    </button>
  </div>
</template>
<script setup>
  import { onBeforeMount, ref } from "vue";
  import ArrowLeft from "../assets/svg/arrow-left.svg";
  import ArrowRight from "../assets/svg/arrow-right.svg";
  import { useStore } from "../stores";

  const store = useStore();

  const CupCakeSlide = ref(0);
  const CupCakes = document.getElementsByClassName("cupcake");
  const CupCakeSelected = ref({
    id: 0,
    name: "",
    url: "",
    price: 0,
  });

  const JsonCupCakes = ref([
    {
      id: 0,
      name: "Vanilla",
      url: "../assets//img/pink-cupcake.png",
      price: 30,
    },
    {
      id: 1,
      name: "Chocolate",
      url: "../assets//img/chocolate-cupcake.png",
      price: 40,
    },
    {
      id: 2,
      name: "Caramel",
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
        CupCakeSelected.value = JsonCupCakes.value[1];

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
        CupCakeSelected.value = JsonCupCakes.value[0];
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
        CupCakeSelected.value = JsonCupCakes.value[1];

        break;
      case 2:
        CupCakes[2].classList.remove("translate-x-40");
        CupCakes[2].classList.remove("translate-x-[10em]");
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
        CupCakeSelected.value = JsonCupCakes.value[2];

        break;
      default:
        break;
    }
  };

  /**
   * Toggles the "scale-[1.75]" class on the corresponding CupCakes element based on the name of the selected CupCake.
   *
   * @return {void} This function does not return anything.
   */
  const checkSelecting = () => {
    switch (CupCakeSelected.value.name) {
      case "Vanilla":
        CupCakes[0].classList.toggle("scale-[1.75]");

        break;
      case "Chocolate":
        CupCakes[1].classList.toggle("scale-[1.75]");

        break;
      case "Caramel":
        CupCakes[2].classList.toggle("scale-[1.75]");

        break;

      default:
        break;
    }
  };

  onBeforeMount(() => {
    CupCakeSelected.value = JsonCupCakes.value[0];
  });
</script>
<style scoped>
  img {
    @apply transition-all duration-700 ease-in-out;
  }
  .serve_buttons {
    @apply rounded-full border border-[#9C0746] bg-[#9C0746] text-white p-4 px-8 w-72 h-20 text-2xl transition-all;
  }
  .serve_buttons:hover {
    @apply drop-shadow-2xl shadow-slate-800 bg-[#9C0746] text-white;
  }
</style>
