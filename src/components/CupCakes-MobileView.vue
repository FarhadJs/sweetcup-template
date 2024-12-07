<template>
  <div class="relative mt-64">
    <div class="flex justify-center gap-5 mt-10 lg:hidden">
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
        class="rounded-full border border-[#9C0746] pt-1 w-36 h-10 text-base font-bold transition-all hover:bg-[#9C0746] hover:text-white hover:drop-shadow-2xl hover:shadow-slate-800">
        Create your own
      </button>
    </div>

    <div dir="rtl" class="relative -z-10 lg:hidden">
      <p
        class="absolute top-8 right-8 bg-[#444251] rounded-full w-14 h-14 text-lg flex justify-center items-center text-white p-4 transition-all duration-500"
        :class="store.is_selecting_cupcake ? 'top-10 right-10' : ''">
        {{ CupCakeSelected.price }}$
      </p>

      <div class="flex mt-14">
        <img
          class="mcupcake w-64 h-64 translate-x-48 translate-y-5"
          src="../assets//img/chocolate-cupcake.png"
          alt="ChocolateCupCake" />
        <img
          class="mcupcake w-80 h-80 translate-x-44 transition-all duration-500"
          src="../assets//img/pink-cupcake.png"
          alt="PinkCupCake" />
        <img
          class="mcupcake w-64 h-64 translate-x-40 translate-y-5"
          src="../assets//img/caramel-cupcake.png"
          alt="CaramelCupcake" />
      </div>

      <h3
        class="bg-white p-3 rounded-full text-center text-2xl font-bold w-44 mx-auto transition-all duration-500 drop-shadow-2xl"
        style="box-shadow: 0px 0px 20px 0px #00000040"
        :class="$store.is_selecting_cupcake ? 'bottom-[13em] scale-125' : ''">
        {{ CupCakeSelected.name }}
      </h3>

      <img
        src="../assets//img//comp-single.png"
        class="absolute right-0 top-60 mt-10 w-40"
        :class="$store.is_selecting_cupcake ? 'mt-10' : ''"
        alt="" />
    </div>

    <div class="flex justify-center gap-7 mt-10 relative z-[50] lg:hidden">
      <button
        @click="
          leftButtonSlideAction();
          getLeftAction();
        "
        :class="$store.is_selecting_cupcake ? 'mt-20' : ''"
        class="bg-white p-4 rounded-lg active:scale-50 transition-all duration-500"
        style="box-shadow: 0px 4px 30px 0px #00000040">
        <img :src="ArrowLeft" />
      </button>

      <button
        @click="
          rightButtonSlideAction();
          getRightAction();
        "
        :class="$store.is_selecting_cupcake ? 'mt-20' : ''"
        class="bg-white p-4 relative rounded-lg active:scale-50 transition-all duration-300 cursor-pointer"
        style="box-shadow: 0px 4px 30px 0px #00000040">
        <img class="cursor-pointer" :src="ArrowRight" />
      </button>
    </div>
  </div>
</template>
<script lang="js" setup>
  import { onBeforeMount, ref } from "vue";
  import ArrowLeft from "../assets/svg/arrow-left.svg";
  import ArrowRight from "../assets/svg/arrow-right.svg";
  import { useStore } from "../stores";

  const store = useStore();

  const CupCakeSlide = ref(1);
  const CupCakes = document.getElementsByClassName("mcupcake");
  const CupCakeSelected = ref({
      id: 0,
      name: "",
      url: "",
      price: 0,
  });

  const JsonCupCakes = ref([
      {
          id: 0,
          name: "Chocolate",
          url: "../assets//img/chocolate-cupcake.png",
          price: 40,
        },
        {
          id: 1,
          name: "Vanilla",
          url: "../assets//img/pink-cupcake.png",
          price: 30,
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

      // console.log(CupCakeSlide.value);

    };

    const rightButtonSlideAction = () => {
      if (CupCakeSlide.value < JsonCupCakes.value.length - 1){
        CupCakeSlide.value += 1;
      }
      // console.log(CupCakeSlide.value);
    };

  const getLeftAction = () => {

    switch (CupCakeSlide.value) {
      case 1:
        CupCakes[0].classList.remove("translate-x-80");
        CupCakes[0].classList.add("translate-x-48");

        CupCakes[1].classList.remove("translate-x-[28em]");
        CupCakes[1].classList.add("translate-x-44");

        CupCakes[2].classList.remove("translate-x-[27.5em]");
        CupCakes[2].classList.add("translate-x-40");

        CupCakeSelected.value = JsonCupCakes.value[1];

        break;
      case 0:
        CupCakes[0].classList.remove("translate-x-48");
        CupCakes[0].classList.add("-translate-x-20");

        CupCakes[1].classList.remove("translate-x-44");
        CupCakes[1].classList.add("-translate-x-28");

        CupCakes[2].classList.remove("translate-x-40");
        CupCakes[2].classList.remove("translate-x-48");
        CupCakes[2].classList.add("translate-x-0");

        CupCakeSelected.value = JsonCupCakes.value[0];
        break;
      default:
        break;
    }
  };
  const getRightAction = () => {
    switch (CupCakeSlide.value) {
      case 1:
        CupCakes[0].classList.remove("-translate-x-20");
        CupCakes[0].classList.add("translate-x-48");

        CupCakes[1].classList.remove("-translate-x-28");
        CupCakes[1].classList.add("translate-x-44");

        CupCakes[2].classList.remove("translate-x-0");
        CupCakes[2].classList.add("translate-x-48");

        CupCakeSelected.value = JsonCupCakes.value[1];

        break;
      case 2:
        CupCakes[0].classList.remove("translate-x-48");
        CupCakes[0].classList.add("translate-x-80");

        CupCakes[1].classList.remove("translate-x-44");
        CupCakes[1].classList.add("translate-x-[28em]");

        CupCakes[2].classList.remove("translate-x-48");
        CupCakes[2].classList.remove("translate-x-40");
        CupCakes[2].classList.add("translate-x-[27.5em]");

        CupCakeSelected.value = JsonCupCakes.value[2];

        break;
      default:
        break;
    }
  };

  /**
   * A function to check and toggle the class "scale-[1.75]" based on the presence of "scale-150" class in CupCakes.
   *
   * @return {void} Does not return anything.
   */
  const checkSelecting = () => {
    for (let i = 0; i < CupCakes.length; i++) {
      const cupCake = CupCakes.item(i);
      if (cupCake.classList.contains("scale-150"))
        cupCake.classList.toggle("scale-[1.75]");
    }
  };

  onBeforeMount(() => {
    CupCakeSelected.value = JsonCupCakes.value[1];
    // console.log(CupCakes);

  });
</script>

<style scoped>
  img {
    @apply transition-all duration-700 ease-in-out;
  }
  .serve_buttons {
    @apply rounded-full border border-[#9C0746] bg-[#9C0746] text-white pt-1 w-36 h-10 text-base font-bold transition-all;
  }
  .serve_buttons:hover {
    @apply drop-shadow-2xl shadow-slate-800 bg-[#9C0746] text-white;
  }
</style>
