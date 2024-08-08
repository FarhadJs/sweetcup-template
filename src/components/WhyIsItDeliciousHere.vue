<template>
  <div class="mt-40 relative">
    <h1 class="text-5xl text-center font-bold">Why is it delicious here?</h1>
    <img
      :src="StrawBerry"
      alt="StrawBerry"
      class="absolute right-40 -top-32 scale-50" />
    <img
      :src="StrawBerry"
      alt="StrawBerry"
      class="absolute -right-32 -top-24 scale-[0.25]" />
    <img
      :src="StrawBerry"
      alt="StrawBerry"
      class="absolute -right-14 top-40 scale-[0.15]" />

    <div
      class="relative p-20 mt-20 mx-auto rounded-full lg:w-[800px] lg:h-[800px] md:w-[600px] md:h-[600px] sm:w-[400px] sm:h-[400px] w-96 h-96 flex items-center justify-center">
      <div class="absolute top-10 left-0 flex items-center gap-5">
        <img :src="Bottle" class="rounded-full bg-[#FDE5EA] w-24 h-24 p-5" />
        <figcaption class="text-2xl">
          Quality<br />
          products
        </figcaption>
      </div>

      <div class="absolute top-10 right-0 flex items-center gap-5">
        <figcaption class="text-2xl">
          Expensive <br />
          Equipment
        </figcaption>
        <img :src="Oven" class="rounded-full bg-[#FDE5EA] p-5" />
      </div>

      <div class="absolute top-80 -left-48 flex items-center gap-5">
        <img :src="FoodBook" class="rounded-full bg-[#FDE5EA] p-5" />
        <figcaption class="text-2xl">
          Unique <br />
          recipes
        </figcaption>
      </div>

      <div dir="rtl" class="absolute top-80 -right-48 flex items-center gap-5">
        <img :src="Money" class="rounded-full bg-[#FDE5EA] p-5" />
        <figcaption class="text-2xl">
          Affordable <br />
          prices
        </figcaption>
      </div>

      <div class="absolute bottom-10 left-0 flex items-center gap-5">
        <img :src="Chef" class="rounded-full bg-[#FDE5EA] w-24 h-24 p-5" />
        <figcaption class="text-2xl">The best <br />confectioners</figcaption>
      </div>

      <div dir="rtl" class="absolute bottom-10 right-0 flex items-center gap-5">
        <img :src="Offer" class="rounded-full bg-[#FDE5EA] w-24 h-24 p-5" />
        <figcaption class="text-2xl">
          Loyalty<br />
          program
        </figcaption>
      </div>

      <div class="relative rounded-full outline outline-[#FDE5EA] w-96 h-96">
        <div
          class="absolute w-7 h-7 rounded-full bg-[#9C0746] top-10 left-10"></div>
        <div
          class="absolute w-7 h-7 rounded-full bg-[#9C0746] top-10 right-10"></div>
        <div
          class="absolute w-7 h-7 rounded-full bg-[#9C0746] bottom-10 left-10"></div>
        <div
          class="absolute w-7 h-7 rounded-full bg-[#9C0746] bottom-10 right-10"></div>

        <img src="../assets//img/pov2-2.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from "vue";
  import StrawBerry from "../assets/img/strawberry.png";
  import FoodBook from "../assets/svg/food-book.svg";
  import Bottle from "../assets/svg/bottle.svg";
  import Offer from "../assets/svg/offer.svg";
  import Money from "../assets/svg/money.svg";
  import Chef from "../assets/svg/chef.svg";
  import Oven from "../assets/svg/oven.svg";
  const test = () => "Hello World!";

  onMounted(() => {
    console.log(test());
  });
</script>
<style></style>
